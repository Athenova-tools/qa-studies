#!/usr/bin/env python3
"""Comprehensive validation of ALL 280 questions across all metadata fields."""
import re, sys

JS_PATH = '/home/cmoreira/proj/ISTQB/ISTQB_CTFL_v4.0.1/js/questions.js'
with open(JS_PATH) as f:
    content = f.read()

STOP = {'the','and','for','are','but','not','has','its','can','all',
        'that','this','with','from','than','they','their','was',
        'when','been','have','also','more','some','into','such',
        'each','most','other','about','which','will','does',
        'what','where','like','just','over','very','should',
        'may','must','then','too','who','how','them','these'}

def tokens(text):
    return set(re.findall(r'[a-z]{3,}', text.lower())) - STOP

def extract_block(text, start):
    depth = 1
    for i in range(start, len(text)):
        if text[i] == '{': depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0: return text[start:i+1]
    return None

NUMERIC_WORDS = {
    'two':'2','three':'3','four':'4','five':'5',
    'six':'6','seven':'7','eight':'8','nine':'9','ten':'10',
    'one':'1','twenty':'20','thirty':'30','forty':'40',
    'fifty':'50','sixty':'60','seventy':'70','eighty':'80',
    'ninety':'90','hundred':'100',
}

def normalize_numbers(text):
    t = text.lower()
    for word, num in NUMERIC_WORDS.items():
        t = t.replace(word, num)
    return re.findall(r'\d+', t)

lines = content.split('\n')
all_questions = []
errors = []

# First, find all question blocks by matching braces from each id: "Qxxx"
# Strategy: Find every id: "Qxxx", then find the enclosing { } and extract the block
import re

def extract_question_block(text, start_pos):
    """Find a complete question object block starting from a position."""
    # Find the opening { of the question object (search backwards from id)
    search_from = start_pos
    while search_from >= 0:
        if text[search_from] == '{':
            break
        search_from -= 1
    else:
        return None
    
    # Now do brace matching forward from there
    depth = 0
    in_str = False
    escape = False
    for i in range(search_from, len(text)):
        ch = text[i]
        if in_str:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return text[search_from:i+1], search_from, i+1
    return None

# Find all question IDs
for m in re.finditer(r'id:\s*"(Q\d+)"', content):
    qid = m.group(1)
    match = extract_question_block(content, m.start())
    if match:
        q_text, q_abs_start, q_abs_end = match
        
        # Determine which exam this belongs to
        # Count exam markers before this position
        prefix = content[:q_abs_start]
        for exam_num in range(7, 0, -1):
            if 'exam%d:' % exam_num in prefix:
                # Check if it's a factory or static exam
                # Find the exam start
                exam_marker = 'exam%d:' % exam_num
                exam_pos = prefix.rfind(exam_marker)
                exam_prefix = content[:exam_pos]
                # Check for function keyword after examN:
                exam_section = content[exam_pos:q_abs_start]
                factory_mode = 'function' in exam_section[:100] and 'q(' in exam_section[:100]
                
                def g(pat):
                    mt = re.search(pat, q_text)
                    return mt.group(1).strip() if mt else ''
                
                expl = g(r'explanation:\s*"((?:[^"\\]|\\.)*)"')
                why = g(r'whyWrong:\s*"((?:[^"\\]|\\.)*)"')
                
                q_entry = {
                    'exam': exam_num, 'id': qid, 'factory': factory_mode,
                    'ca': g(r'correctAnswer:\s*"([^"]+)"'),
                    'expl': expl, 'why': why,
                    'keywords_raw': g(r'keywords:\s*\[(.*?)\]'),
                    'examTip': g(r'examTip:\s*"((?:[^"\\]|\\.)*)"'),
                    'memoryAid': g(r'memoryAid:\s*"((?:[^"\\]|\\.)*)"'),
                    'section': g(r'section:\s*"([^"]+)"'),
                    'chapter_raw': g(r'chapter:\s*(\d+)'),
                }
                
                opt_m = re.search(r'options:\s*\{', q_text)
                opts = {}
                if opt_m:
                    ob = extract_block(q_text, opt_m.end())
                    if ob:
                        for mo in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', ob):
                            opts[mo.group(1)] = mo.group(2)
                q_entry['opts'] = opts
                
                oe_m = re.search(r'optionExplanations:\s*\{', q_text)
                oes = {}
                if oe_m:
                    ob = extract_block(q_text, oe_m.end())
                    if ob:
                        for mo in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', ob):
                            oes[mo.group(1)] = mo.group(2)
                q_entry['oes'] = oes
                
                sm = re.search(r'statement:\s*"((?:[^"\\]|\\.)*)"', q_text)
                q_entry['statement'] = sm.group(1) if sm else ''
                
                all_questions.append(q_entry)
                break
                def g(pat):
                    mt = re.search(pat, q_text)
                    return mt.group(1).strip() if mt else ''
                qid = g(r'id:\s*"(Q\d+)"')
                if qid:
                    expl = g(r'explanation:\s*"((?:[^"\\]|\\.)*)"')
                    why = g(r'whyWrong:\s*"((?:[^"\\]|\\.)*)"')
                    q_entry = {
                        'exam': exam_num, 'id': qid, 'factory': factory_mode,
                        'ca': g(r'correctAnswer:\s*"([^"]+)"'),
                        'expl': expl, 'why': why,
                        'keywords_raw': g(r'keywords:\s*\[(.*?)\]'),
                        'examTip': g(r'examTip:\s*"((?:[^"\\]|\\.)*)"'),
                        'memoryAid': g(r'memoryAid:\s*"((?:[^"\\]|\\.)*)"'),
                        'section': g(r'section:\s*"([^"]+)"'),
                        'chapter_raw': g(r'chapter:\s*(\d+)'),
                    }
                    opt_m = re.search(r'options:\s*\{', q_text)
                    opts = {}
                    if opt_m:
                        ob = extract_block(q_text, opt_m.end())
                        if ob:
                            for mo in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', ob):
                                opts[mo.group(1)] = mo.group(2)
                    q_entry['opts'] = opts
                    oe_m = re.search(r'optionExplanations:\s*\{', q_text)
                    oes = {}
                    if oe_m:
                        ob = extract_block(q_text, oe_m.end())
                        if ob:
                            for mo in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', ob):
                                oes[mo.group(1)] = mo.group(2)
                    q_entry['oes'] = oes
                    sm = re.search(r'statement:\s*"((?:[^"\\]|\\.)*)"', q_text)
                    q_entry['statement'] = sm.group(1) if sm else ''
                    all_questions.append(q_entry)
                q_start = None
                q_lines = []

print('Total questions found: %d' % len(all_questions))
for e in errors:
    print('  ERROR: %s' % e)

issues = []

for q in all_questions:
    qid = q['id']
    ca = q['ca']
    expl = q['expl']
    why = q['why']
    opts = q.get('opts', {})
    oes = q.get('oes', {})
    statement = q.get('statement', '')
    examTip = q['examTip']
    memoryAid = q['memoryAid']
    
    # Check 1: CA consistency with explanation
    if opts and expl and ca in opts:
        expl_tok = tokens(expl)
        ca_tok = tokens(opts[ca])
        overlap = len(expl_tok & ca_tok)
        expl_nums = set(normalize_numbers(expl))
        ca_nums = set(normalize_numbers(opts[ca]))
        num_overlap = len(expl_nums & ca_nums)
        if overlap == 0 and num_overlap == 0:
            issues.append(('%s: CA=%s has 0 keyword AND 0 number overlap with explanation', qid, ca))
    
    # Check 2: OE alignment with options
    if opts and oes and len(opts) >= 4 and len(oes) >= 4:
        for letter in ['A','B','C','D']:
            if letter in opts and letter in oes:
                opt_tok = tokens(opts[letter])
                oe_tok = tokens(oes[letter])
                if opt_tok and not (opt_tok & oe_tok):
                    opt_nums = set(normalize_numbers(opts[letter]))
                    oe_nums = set(normalize_numbers(oes[letter]))
                    if opt_nums and not (opt_nums & oe_nums):
                        opt_lower = opts[letter].lower()
                        oe_lower = oes[letter].lower()
                        opt_words = set(re.findall(r'\b[a-z]+\b', opt_lower))
                        oe_words = set(re.findall(r'\b[a-z]+\b', oe_lower))
                        opt_sig = opt_words - STOP - {'the','this','that','with','from'}
                        oe_sig = oe_words - STOP
                        if opt_sig and not (opt_sig & oe_sig):
                            issues.append(('%s OE-%s: no significant keyword overlap', qid, letter))
    
    # Check 3: whyWrong quality
    if why and opts:
        why_lower = why.lower()
        if len(why) < 10:
            issues.append(('%s: whyWrong too short (%d chars)', qid, len(why)))
        elif ('incorrect' not in why_lower and 'wrong' not in why_lower and 
              'not' not in why_lower and 'contrast' not in why_lower and 
              'differs' not in why_lower and 'unlike' not in why_lower and 
              len(why) <= 30):
            issues.append(('%s: whyWrong lacks critique: "%s"', qid, why[:80]))
    
    # Check 4: Keywords relevance
    if q['keywords_raw']:
        kw_list = re.findall(r'"([^"]+)"', q['keywords_raw'])
        all_text = (statement + ' ' + expl + ' ' + (why or '')).lower()
        for kw in kw_list:
            kw_clean = kw.strip().lower()
            if kw_clean not in all_text:
                in_opts = any(kw_clean in v.lower() for v in opts.values())
                if not in_opts:
                    issues.append(('%s: keyword "%s" not found in text', qid, kw))
    
    # Check 5: ExamTip relevance
    if examTip:
        tip_tok = tokens(examTip)
        expl_tok = tokens(expl) if expl else set()
        stmt_tok = tokens(statement) if statement else set()
        if tip_tok and (expl_tok | stmt_tok):
            if not (tip_tok & (expl_tok | stmt_tok)) and q['keywords_raw']:
                kw_list = re.findall(r'"([^"]+)"', q['keywords_raw'])
                if not any(kw.strip().lower() in examTip.lower() for kw in kw_list):
                    issues.append(('%s: ExamTip no keyword overlap', qid))
    
    # Check 6: MemoryAid quality
    if memoryAid:
        if len(memoryAid) < 8:
            issues.append(('%s: MemoryAid too short (%d chars)', qid, len(memoryAid)))
        ma_tok = tokens(memoryAid)
        expl_tok = tokens(expl) if expl else set()
        if ma_tok and expl_tok and not (ma_tok & expl_tok) and q['keywords_raw']:
            kw_list = re.findall(r'"([^"]+)"', q['keywords_raw'])
            if not any(kw.strip().lower() in memoryAid.lower() for kw in kw_list):
                issues.append(('%s: MemoryAid no keyword overlap', qid))
    
    # Check 7: Reference metadata
    if not q.get('section'):
        issues.append(('%s: missing section', qid))
    if not q.get('chapter_raw'):
        issues.append(('%s: missing chapter', qid))
    
    # Check 8: OE/Options match
    if opts and oes:
        if len(opts) != len(oes):
            issues.append(('%s: %d options vs %d optionExplanations', qid, len(opts), len(oes)))
        opt_letters = set(opts.keys())
        oe_letters = set(oes.keys())
        if opt_letters != oe_letters:
            for lo in sorted(opt_letters - oe_letters):
                issues.append(('%s: option %s has no explanation', qid, lo))
            for lo in sorted(oe_letters - opt_letters):
                issues.append(('%s: explanation %s for non-existent option', qid, lo))

# Factory validation
print('\n--- Factory Questions (Exams 6-7) ---')
factory_issues = []
for exam_num in [6, 7]:
    start_key = 'exam%d:' % exam_num
    end_key = 'exam%d:' % (exam_num + 1) if exam_num < 7 else None
    sl = el = None
    for i, line in enumerate(lines):
        if line.strip().startswith(start_key): sl = i
        if end_key and line.strip().startswith(end_key): el = i
    if sl is None: continue
    exam_text = '\n'.join(lines[sl:el])
    pos = 0
    call_count = 0
    while pos < len(exam_text):
        qm = re.search(r'q\("(Q\d+)"', exam_text[pos:])
        if not qm: break
        qid = qm.group(1)
        qcall_start = pos + qm.start()
        arr_m = re.search(r'\[', exam_text[qcall_start:])
        if not arr_m:
            pos = qcall_start + 1
            continue
        arr_start = qcall_start + arr_m.start()
        depth = 0
        arr_end = arr_start
        for i in range(arr_start, len(exam_text)):
            if exam_text[i] == '[': depth += 1
            elif exam_text[i] == ']':
                depth -= 1
                if depth == 0:
                    arr_end = i + 1
                    break
        opts_arr = re.findall(r'"((?:[^"\\]|\\.)*)"', exam_text[arr_start:arr_end])
        after_opts = exam_text[arr_end:]
        ca_m = re.search(r'"([A-D])"', after_opts)
        ca_param = ca_m.group(1) if ca_m else '?'
        expl_m = re.search(r'"((?:[^"\\]|\\.)*)"', after_opts[2:] if ca_m else after_opts)
        expl = expl_m.group(1) if expl_m else '?'
        
        qid_num = int(qid[1:])
        correctIndex = qid_num % 4
        letters = ['A','B','C','D']
        actual_ca = letters[correctIndex]
        option_map = {}
        for idx, letter in enumerate(letters):
            option_map[letter] = opts_arr[(idx - correctIndex + 4) % 4]
        
        expl_tok = tokens(expl)
        ca_tok = tokens(option_map.get(actual_ca, ''))
        overlap = len(expl_tok & ca_tok)
        if overlap == 0:
            expl_nums = set(normalize_numbers(expl))
            ca_nums = set(normalize_numbers(option_map.get(actual_ca, '')))
            if not (expl_nums & ca_nums):
                factory_issues.append('%s: CA=%s 0 keyword/number overlap with explanation' % (qid, actual_ca))
        
        q_entry = next((q for q in all_questions if q.get('id') == qid and q.get('exam') == exam_num), None)
        if q_entry:
            if not q_entry.get('why') or len(q_entry.get('why','')) < 5:
                factory_issues.append('%s: missing/short whyWrong' % qid)
            if not q_entry.get('oes'):
                factory_issues.append('%s: missing optionExplanations' % qid)
        
        call_count += 1
        pos = qcall_start + 1
    print('Exam %d: ~%d questions' % (exam_num, call_count))

if factory_issues:
    print('\nFactory Issues:')
    for fi in factory_issues:
        print('  %s' % fi)

print('\n' + '='*60)
total = len(issues) + len(factory_issues)
print('VALIDATION ISSUES FOUND: %d' % total)
print('='*60)
if total == 0:
    print('  ALL CHECKS PASSED')
else:
    for issue in issues:
        fmt = issue[0] % issue[1:]
        print('  %s' % fmt)
    for fi in factory_issues:
        print('  %s' % fi)

print('\n' + '='*60)
print('EXAM SUMMARY')
print('='*60)
for exam_num in range(1, 8):
    eq = [q for q in all_questions if q['exam'] == exam_num]
    if not eq: continue
    label = 'factory' if eq[0]['factory'] else 'static'
    print('\nExam %d: %d questions (%s)' % (exam_num, len(eq), label))
    ca_dist = {}
    for q in eq:
        if q.get('ca'): ca_dist[q['ca']] = ca_dist.get(q['ca'], 0) + 1
    if ca_dist:
        items = sorted(ca_dist.items())
        print('  CA distribution: %s' % ' '.join('%s=%d' % (k,v) for k,v in items))
    missing = {'keywords':0,'examTip':0,'memoryAid':0,'whyWrong':0,'optionExplanations':0}
    for q in eq:
        if not q.get('keywords_raw'): missing['keywords'] += 1
        if not q.get('examTip'): missing['examTip'] += 1
        if not q.get('memoryAid'): missing['memoryAid'] += 1
        if not q.get('why') or len(q.get('why','')) < 3: missing['whyWrong'] += 1
        if not q.get('oes'): missing['optionExplanations'] += 1
    for k, v in missing.items():
        if v > 0: print('  Missing %s: %d/%d' % (k, v, len(eq)))
print('\nDone.')
