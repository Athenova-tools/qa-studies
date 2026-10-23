import html, re, pathlib

TEMP = pathlib.Path("/home/cmoreira/proj/ISTQB/ISTQB_CTFL_v4.0.1/TEMP")
files = sorted(TEMP.glob("donation-prompt-*.md"))
labels = {
    "1": "1 · pt-PT",
    "2": "2 · Recorrente USD",
    "3": "3 · Open-Source",
    "4": "4 · Minimalista",
    "5": "5 · Campanha",
}

def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    s = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<!\*)\*([^*\n]+)\*(?!\*)', r'<em>\1</em>', s)
    return s

def render(md):
    out, i, para, in_code, in_ul, in_ol = [], 0, [], False, False, False
    def close_para():
        nonlocal para
        if para:
            out.append("<p>" + " ".join(inline(l) for l in para) + "</p>"); para = []
    def close_lists():
        nonlocal in_ul, in_ol
        if in_ul: out.append("</ul>"); in_ul = False
        if in_ol: out.append("</ol>"); in_ol = False
    lines = md.splitlines()
    while i < len(lines):
        ln = lines[i]
        if ln.strip().startswith("```"):
            close_para(); close_lists()
            if not in_code:
                out.append('<pre><code>'); in_code = True
            else:
                out.append('</code></pre>'); in_code = False
            i += 1; continue
        if in_code:
            out.append(html.escape(ln) + "\n"); i += 1; continue
        m = re.match(r'^(#{1,6})\s+(.*)$', ln)
        if m:
            close_para(); close_lists()
            lvl = min(len(m.group(1)) + 1, 6)
            out.append(f"<h{lvl}>{inline(m.group(2))}</h{lvl}>"); i += 1; continue
        if re.match(r'^\s*-\s+', ln):
            close_para()
            if in_ol: out.append("</ol>"); in_ol = False
            if not in_ul: out.append("<ul>"); in_ul = True
            out.append("<li>" + inline(re.sub(r'^\s*-\s+', '', ln)) + "</li>"); i += 1; continue
        m = re.match(r'^\s*(\d+)\.\s+(.*)$', ln)
        if m:
            close_para()
            if in_ul: out.append("</ul>"); in_ul = False
            if not in_ol: out.append("<ol>"); in_ol = True
            out.append("<li>" + inline(m.group(2)) + "</li>"); i += 1; continue
        if not ln.strip():
            close_para(); close_lists(); i += 1; continue
        close_lists(); para.append(ln.strip()); i += 1
    close_para(); close_lists()
    if in_code: out.append("</code></pre>")
    return "\n".join(out)

sections, raws, tabs = [], [], []
for f in files:
    md = f.read_text(encoding="utf-8")
    n = re.search(r'-(\d)-', f.name).group(1)
    title_m = re.search(r'^#\s+(.*)$', md, re.M)
    title = title_m.group(1) if title_m else f.name
    sections.append(f'<section id="p{n}" class="panel"><div class="panel-head"><h1>{inline(title)}</h1><div class="meta">{f.name} · {len(md.split())} palavras</div><button class="copy" data-copy="raw{n}">Copiar markdown</button></div><article>{render(md)}</article></section>')
    raws.append(f'<script type="text/plain" id="raw{n}">{html.escape(md)}</script>')
    tabs.append(f'<button class="tab" data-target="p{n}">{labels.get(n, f.name)}</button>')

page = f"""<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>5 Exemplos — Prompt de Página de Donativos PayPal</title>
<style>
  :root {{ --bg:#f6f8fb; --card:#fff; --ink:#1b2430; --muted:#5b6b7c; --line:#e3e9f1; --accent:#2563eb; --accent-ink:#fff; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; font:16px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif; background:var(--bg); color:var(--ink); }}
  header {{ position:sticky; top:0; z-index:5; background:rgba(255,255,255,.92); backdrop-filter:blur(6px); border-bottom:1px solid var(--line); padding:14px 20px 10px; }}
  header h1 {{ margin:0 0 4px; font-size:19px; }}
  header .sub {{ color:var(--muted); font-size:13px; margin-bottom:10px; }}
  nav {{ display:flex; gap:8px; flex-wrap:wrap; }}
  .tab {{ border:1px solid var(--line); background:#fff; color:var(--ink); border-radius:999px; padding:7px 14px; font-size:13.5px; font-weight:600; cursor:pointer; }}
  .tab:hover {{ border-color:var(--accent); color:var(--accent); }}
  .tab.active {{ background:var(--accent); border-color:var(--accent); color:var(--accent-ink); }}
  main {{ max-width:920px; margin:24px auto 60px; padding:0 18px; }}
  .panel {{ display:none; background:var(--card); border:1px solid var(--line); border-radius:14px; padding:26px 30px 20px; box-shadow:0 8px 26px rgba(20,40,80,.06); }}
  .panel.active {{ display:block; }}
  .panel-head {{ border-bottom:1px solid var(--line); margin-bottom:18px; padding-bottom:14px; position:relative; }}
  .panel-head h1 {{ margin:0 0 6px; font-size:21px; line-height:1.35; }}
  .meta {{ color:var(--muted); font-size:12.5px; }}
  .copy {{ position:absolute; top:0; right:0; border:1px solid var(--accent); color:var(--accent); background:#fff; border-radius:8px; padding:6px 12px; font-size:13px; font-weight:600; cursor:pointer; }}
  .copy:hover {{ background:var(--accent); color:#fff; }}
  article h1 {{ font-size:20px; }} article h2 {{ font-size:17px; margin:26px 0 8px; color:var(--accent); }} article h3 {{ font-size:15.5px; margin:18px 0 6px; }}
  article h4, article h5, article h6 {{ font-size:14.5px; margin:14px 0 6px; }}
  article p {{ margin:9px 0; }}
  article ul, article ol {{ margin:8px 0; padding-left:24px; }}
  article li {{ margin:4px 0; }}
  article strong {{ color:#0f172a; }}
  code {{ background:#eef2f8; border:1px solid var(--line); border-radius:5px; padding:1px 6px; font-size:13.5px; font-family:ui-monospace,Consolas,monospace; }}
  pre {{ background:#0f172a; color:#e2e8f0; border-radius:10px; padding:14px 16px; overflow:auto; }}
  pre code {{ background:none; border:none; color:inherit; padding:0; font-size:13px; }}
  footer {{ text-align:center; color:var(--muted); font-size:12.5px; padding:0 0 30px; }}
  @media (max-width:640px) {{ .panel {{ padding:18px 16px; }} .copy {{ position:static; margin-top:8px; }} }}
</style>
</head>
<body>
<header>
  <h1>5 Exemplos — Prompt: Página de Donativos com PayPal</h1>
  <div class="sub">Variações do mesmo prompt · ficheiros .md em <code>TEMP/</code> · gerado automaticamente</div>
  <nav id="nav">{"".join(tabs)}</nav>
</header>
<main>
{"".join(sections)}
</main>
<footer>Para reverter: edita os .md e gera de novo este index.html</footer>
{"".join(raws)}
<script>
(function () {{
  function show(id) {{
    document.querySelectorAll('.panel').forEach(function (p) {{ p.classList.toggle('active', p.id === id); }});
    document.querySelectorAll('.tab').forEach(function (t) {{ t.classList.toggle('active', t.dataset.target === id); }});
    history.replaceState(null, '', '#' + id);
    window.scrollTo({{ top: 0, behavior: 'smooth' }});
  }}
  document.querySelectorAll('.tab').forEach(function (t) {{
    t.addEventListener('click', function () {{ show(t.dataset.target); }});
  }});
  document.querySelectorAll('.copy').forEach(function (b) {{
    b.addEventListener('click', function () {{
      var raw = document.getElementById(b.dataset.copy).textContent;
      navigator.clipboard.writeText(raw).then(function () {{
        b.textContent = 'Copiado ✓';
        setTimeout(function () {{ b.textContent = 'Copiar markdown'; }}, 1500);
      }});
    }});
  }});
  var start = (location.hash || '#p1').slice(1);
  show(document.getElementById(start) ? start : 'p1');
}})();
</script>
</body>
</html>
"""
(TEMP / "index.html").write_text(page, encoding="utf-8")
print("OK", TEMP / "index.html", len(page), "bytes;", len(files), "exemplos")
