#!/usr/bin/env python3
"""Smart cleanup: replace keywords with phrases found verbatim in question text."""
import re

JS_PATH = '/home/cmoreira/proj/ISTQB/ISTQB_CTFL_v4.0.1/js/questions.js'
with open(JS_PATH) as f:
    content = f.read()

def extract_block(text, start):
    depth = 1
    for i in range(start, len(text)):
        if text[i] == '{': depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0: return text[start:i+1]
    return None

def find_question_blocks(text):
    blocks = []
    for m in re.finditer(r'id:\s*"(Q\d+)"', text):
        qid = m.group(1)
        pos = m.start()
        while pos >= 0:
            if text[pos] == '{': break
            pos -= 1
        if pos < 0: continue
        depth = 0; in_str = False; escape = False
        for i in range(pos, len(text)):
            ch = text[i]
            if in_str:
                if escape: escape = False
                elif ch == '\\': escape = True
                elif ch == '"': in_str = False
            else:
                if ch == '"': in_str = True
                elif ch == '{': depth += 1
                elif ch == '}':
                    depth -= 1
                    if depth == 0:
                        blocks.append((qid, pos, i+1))
                        break
    return blocks

def get_field(block_text, field):
    mt = re.search(r'%s:\s*"((?:[^"\\]|\\.)*)"' % field, block_text)
    return mt.group(1) if mt else ''

def get_keywords_raw(block_text):
    mt = re.search(r'keywords:\s*\[(.*?)\]', block_text)
    return mt.group(1) if mt else ''

def get_options(block_text):
    opt_m = re.search(r'options:\s*\{', block_text)
    if not opt_m: return {}
    ob = extract_block(block_text, opt_m.end())
    if not ob: return {}
    opts = {}
    for mo in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', ob):
        opts[mo.group(1)] = mo.group(2)
    return opts

def get_oes(block_text):
    oe_m = re.search(r'optionExplanations:\s*\{', block_text)
    if not oe_m: return {}
    ob = extract_block(block_text, oe_m.end())
    if not ob: return {}
    oes = {}
    for mo in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', ob):
        oes[mo.group(1)] = mo.group(2)
    return oes

def find_best_phrase(keyword, text):
    """Find a phrase in text that best matches the keyword concept."""
    kw = keyword.lower().strip()
    kw_words = re.findall(r'[a-z]+', kw)
    if not kw_words:
        return None
    
    text_lower = text.lower()
    
    # Find n-grams (2-5 words) in text that contain the most keyword words
    words = re.findall(r'[a-z]+(?:[-\'][a-z]+)*', text_lower)
    
    best_phrase = None
    best_score = 0
    
    for n in range(min(5, len(words)), 1, -1):
        for i in range(len(words) - n + 1):
            phrase = ' '.join(words[i:i+n])
            if len(phrase) < 5:
                continue
            # Score: how many keyword words appear in the phrase
            phrase_words = set(re.findall(r'[a-z]+', phrase))
            kw_set = set(kw_words)
            score = len(kw_set & phrase_words)
            if score > best_score:
                # Bonus for shorter phrases
                best_score = score
                best_phrase = phrase
    
    if best_score >= max(1, len(set(kw_words)) - 1):
        return best_phrase
    if best_score >= 1 and len(set(kw_words)) <= 2:
        return best_phrase
    
    return None

blocks = find_question_blocks(content)
replacements = []

for qid, start, end in blocks:
    bt = content[start:end]
    statement = get_field(bt, 'statement')
    expl = get_field(bt, 'explanation')
    why = get_field(bt, 'whyWrong')
    examTip = get_field(bt, 'examTip')
    opts = get_options(bt)
    oes = get_oes(bt)
    memoryAid = get_field(bt, 'memoryAid')
    
    all_text = statement + ' ' + expl + ' ' + why + ' ' + examTip
    for v in opts.values(): all_text += ' ' + v
    for v in oes.values(): all_text += ' ' + v
    if memoryAid: all_text += ' ' + memoryAid
    all_text_lower = all_text.lower()
    
    kw_raw = get_keywords_raw(bt)
    kw_list = re.findall(r'"([^"]+)"', kw_raw)
    
    new_kws = []
    changed = False
    for kw in kw_list:
        kw_lower = kw.strip().lower()
        if kw_lower in all_text_lower:
            new_kws.append(kw)
            continue
        
        # Check in OEs
        in_oe = any(kw_lower in oe.lower() for oe in oes.values())
        if in_oe:
            new_kws.append(kw)
            continue
        
        best = find_best_phrase(kw, all_text)
        if best:
            # Capitalize first letter
            fmt = best[0].upper() + best[1:]
            replacements.append((qid, kw, fmt))
            new_kws.append(fmt)
            changed = True
        else:
            new_kws.append(kw)
    
    if changed:
        new_kw_str = ', '.join('"' + k + '"' for k in new_kws)
        old = 'keywords: [%s]' % kw_raw
        new = 'keywords: [%s]' % new_kw_str
        content = content[:start] + content[start:end].replace(old, new, 1) + content[end:]

# Now fix MemoryAid - add topic keywords
import subprocess
print('=== KEYWORD REPLACEMENTS ===')
for qid, old, new in replacements:
    print('  %s: "%s" -> "%s"' % (qid, old, new))

print('\n%d keywords updated.' % len(replacements))
print()

# Write output
with open(JS_PATH, 'w') as f:
    f.write(content)

print('File written successfully.')
