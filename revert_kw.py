#!/usr/bin/env python3
"""Revert the automated keyword replacements from clean_kw.py."""
import re

JS_PATH = '/home/cmoreira/proj/ISTQB/ISTQB_CTFL_v4.0.1/js/questions.js'
with open(JS_PATH) as f:
    content = f.read()

# Known replacements from the clean_kw.py run output
replacements = [
    # (qid, original_keyword, bad_replacement)
    ("Q001", "testing purpose", "The main purpose of testing"),
    ("Q001", "quality information", "And provide information about quality"),
    ("Q004", "testing principles", "Test team has been testing"),
    ("Q006", "test artifacts", "All test-related documents and artifacts"),
    ("Q006", "test documentation", "And documentation testware all test-related"),
    ("Q007", "tester skills", "Essential skill for a tester"),
    ("Q008", "testing principles", "Their business needs which testing"),
    ("Q010", "test levels", "Example of a component test"),
    ("Q012", "test types", "Following is a functional test"),
    ("Q013", "impact analysis", "The patch and the impact"),
    ("Q016", "static testing", "Looping in program execution static"),
    ("Q016", "defect types", "Conditions what type of defect"),
    ("Q018", "test techniques", "Following is a black-box test"),
    ("Q022", "state coverage", "In state transition testing what"),
    ("Q034", "test tools", "Is a risk of test"),
    ("Q036", "test management", "Following best describes the test"),
    ("Q037", "test process", "A test team consistently finds"),
    ("Q038", "testing principles", "A good practice in testing"),
    ("Q039", "risk-based testing", "Good practices risk-based early testing"),
    ("Q041", "test management", "Primary difference between a test"),
    ("Q042", "test documentation", "Example of a non-functional test"),
    ("Q043", "non-functional testing", "Parts of the system non-functional"),
    ("Q043", "performance testing", "Data what type of testing"),
    ("Q044", "regression testing", "Requires maintenance testing confirmation regression"),
    ("Q046", "user acceptance", "Not standard practice acceptance user"),
    ("Q047", "formal review", "Defect found suspend the review"),
    ("Q047", "review process", "Defect found suspend the review"),
    ("Q047", "review procedures", "Defect found suspend the review"),
    ("Q048", "static analysis", "Not the process leader static"),
    ("Q048", "dynamic analysis", "Don't run the code dynamic"),
    ("Q048", "code execution", "Static don't run the code"),
    ("Q049", "review roles", "Leader manager of the review"),
    ("Q049", "review process", "Leader manager of the review"),
    ("Q050", "condition combinations", "Are not boundary values combinations"),
    ("Q053", "state transition", "Of the two statements transition"),
    ("Q054", "statement testing", "An advantage of checklist-based testing"),
    ("Q055", "experience-based", "Informal based on tester experience"),
    ("Q057", "test metrics", "Is the relationship between test"),
    ("Q057", "progress monitoring", "Monitoring measures and tracks progress"),
    ("Q057", "defect discovery", "Increasing pass rate increasing defect"),
    ("Q058", "test monitoring", "Affect the project's success test"),
    ("Q058", "test control", "Affect the project's success test"),
    ("Q059", "risk types", "Invalid input gracefully project risk"),
    ("Q060", "defect severity", "The overall testing process severity"),
    ("Q060", "defect management", "Generating test reports test management"),
    ("Q061", "tool categories", "Record any interactions management tool"),
    ("Q061", "test planning", "On record-and-playback tools for test"),
    ("Q063", "testing roles", "Is true about the testing"),
    ("Q064", "context dependent", "Continuous testing and integration context"),
    ("Q064", "testing principles", "Continuous feedback on quality testing"),
    ("Q065", "Agile testing", "Work product in agile testing"),
    ("Q065", "tester role", "And continuous testing agile tester"),
    ("Q066", "review types", "High informal walkthrough technical review"),
    ("Q070", "defect reporting", "Knowledge and closing all defect"),
    ("Q073", "tool selection", "Always pilot a new tool"),
    ("Q073", "automation adoption", "And reduces adoption risks automation"),
    ("Q074", "experience-based", "Possibly go wrong here based"),
    ("Q075", "risk-based testing", "Higher risk more thorough testing"),
    ("Q075", "test approach", "A characteristic of good test"),
    ("Q077", "defect lifecycle", "Assign blame or punish defect"),
    ("Q079", "decision coverage", "Not decision outcomes branch coverage"),
    ("Q081", "cost of defects", "The cost of fixing defects"),
    ("Q082", "testing purpose", "Matches the activities described testing"),
    ("Q083", "root cause analysis", "And fixing the root cause"),
    ("Q084", "cost of defects", "Cost of fixing early defects"),
    ("Q085", "testing principles", "Modules not that exhaustive testing"),
    ("Q086", "test scheduling", "Testware produced during the test"),
    ("Q087", "test artifacts", "Process testware all testing artifacts"),
    ("Q088", "analytical skills", "To identify requirements ambiguity analytical"),
    ("Q090", "sequential model", "Before component testing in sequential"),
    ("Q093", "non-functional testing", "Non-functional test types maintenance testing"),
    ("Q093", "usability testing", "Term for white-box testing usability"),
    ("Q096", "code analysis", "Criteria dynamic analysis requires code"),
    ("Q097", "review types", "During a review participants have"),
    ("Q098", "review process", "Planning occurs before individual review"),
    ("Q099", "test techniques", "Of valid partitions black-box techniques"),
    ("Q101", "boundary value analysis", "Value bva tests the boundary"),
    ("Q101", "monetary values", "Bva tests the boundary values"),
    ("Q103", "invalid transition", "According to the state transition"),
    ("Q106", "branch coverage", "Cases could cover all branch"),
    ("Q107", "domain experience", "Tester's domain knowledge and experience"),
    ("Q112", "effort estimation", "Provide to stakeholders analogy-based estimation"),
    ("Q115", "risk assessment", "The correct sequence of risk"),
    ("Q116", "risk process", "The tester do next risk"),
    ("Q118", "defect management", "Priority can differ this defect"),
    ("Q119", "load testing", "Performance testing tools generate load"),
    ("Q121", "regression testing", "Quickly and consistently particularly regression"),
    ("Q122", "test control", "Highlight test monitoring and control"),
    ("Q125", "tester skills", "For testers a curious tester"),
    ("Q126", "iterative development", "After development testing in iterative"),
    ("Q126", "Agile testing", "Models such as agile testing"),
    ("Q126", "continuous testing", "Iteration for continuous feedback testing"),
    ("Q130", "review types", "Walkthroughs are author-led review meetings"),
    ("Q133", "state transition", "A transition directly from locked"),
    ("Q133", "login system", "Locked after three failed login"),
    ("Q133", "invalid transition", "A transition directly from locked"),
    ("Q136", "test management", "In a centralized test organization"),
    ("Q138", "environment issues", "Deviation from the plan environment"),
    ("Q139", "defect triage", "Be lower than a defect"),
    ("Q140", "automated testing", "Integration and automated regression testing"),
    ("Q141", "UI automation", "Common risk of test automation"),
    ("Q143", "defect analysis", "One specific defect dynamic analysis"),
    ("Q145", "testing principles", "The principle exhaustive testing is"),
    ("Q145", "complete testing", "The principle exhaustive testing is"),
    ("Q148", "incremental testing", "But testing is not incremental"),
    ("Q149", "review types", "During an informal review of"),
    ("Q150", "static testing", "Not replace dynamic testing static"),
    ("Q150", "coding standards", "It they can identify coding"),
    ("Q155", "invalid transitions", "Transitions is most likely invalid"),
    ("Q158", "defect severity", "The defect be classified severity"),
    ("Q158", "defect priority", "A defect is discovered where"),
    ("Q160", "completion conditions", "Approach based on current conditions"),
    ("Q164", "defect prevention", "Address prevention error person defect"),
    ("Q165", "testing principles", "A team is testing a"),
    ("Q166", "test organization", "Test team within the organization"),
    ("Q166", "testing levels", "An organization has testing performed"),
    ("Q167", "tester role", "The role of the tester"),
    ("Q169", "test process", "During test analysis a tester"),
    ("Q169", "test activities", "For subsequent test design activities"),
    ("Q170", "test conditions", "System testing is a test"),
    ("Q170", "test basis", "System testing is a test"),
    ("Q171", "test level", "Regulatory compliance system testing test"),
    ("Q171", "complete system", "A new tax calculation system"),
    ("Q172", "regulatory acceptance testing", "Operational contract regulatory acceptance testing"),
    ("Q173", "load testing", "System what type of testing"),
    ("Q174", "data integrity", "Requires maintenance testing including data"),
    ("Q175", "incremental integration", "That require code execution incremental"),
    ("Q175", "integration testing", "Main categories of static testing"),
    ("Q176", "static analysis", "Individual preparation not before static"),
    ("Q177", "review process", "During a code review a"),
    ("Q178", "static testing", "Them during development or testing"),
    ("Q182", "boundary value analysis", "A is the boundary value"),
    ("Q184", "order processing", "To achieve high coverage order"),
    ("Q185", "user interaction", "Use case testing testing user"),
    ("Q186", "multi-branch", "Of test cases for branch"),
    ("Q188", "white-box testing", "Discovery safety-critical often requires white-box"),
    ("Q188", "statement coverage", "To verify providing structured coverage"),
    ("Q188", "branch coverage", "To verify providing structured coverage"),
    ("Q189", "checklist-based testing", "And adapt their testing based"),
    ("Q189", "experience-based", "Designs and executes tests based"),
    ("Q190", "no documentation", "Are part of test documentation"),
    ("Q191", "test management", "A test plan should include"),
    ("Q192", "test planning", "Would best help a test"),
    ("Q193", "test metrics", "And assign ownership the test"),
    ("Q194", "defect management", "Not additive or divisive defect"),
    ("Q195", "risk analysis", "Example of a product risk"),
    ("Q196", "risk assessment", "Test completion report product risk"),
    ("Q196", "quality risk", "Project risk product software quality"),
    ("Q198", "Delphi technique", "Not multiple independent estimates delphi"),
]

# For each replacement, find the question block and replace the bad keyword with the original
# We need to be careful to only replace within the keywords array

def find_question_block(content, qid):
    """Find the question block for a given QID."""
    m = re.search(r'id:\s*"%s"' % qid, content)
    if not m: return None
    pos = m.start()
    while pos >= 0:
        if content[pos] == '{': break
        pos -= 1
    if pos < 0: return None
    depth = 0; in_str = False; escape = False
    for i in range(pos, len(content)):
        ch = content[i]
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
                    return content[pos:i+1], pos, i+1
    return None

# Group replacements by QID
from collections import defaultdict
by_qid = defaultdict(list)
for qid, orig, bad in replacements:
    by_qid[qid].append((orig, bad))

changes_count = 0

for qid, q_repls in sorted(by_qid.items()):
    result = find_question_block(content, qid)
    if not result:
        print('  Could not find block for %s' % qid)
        continue
    
    q_text, q_start, q_end = result
    
    # Find keywords array in this block
    kw_m = re.search(r'keywords:\s*\[(.*?)\]', q_text)
    if not kw_m:
        print('  Could not find keywords for %s' % qid)
        continue
    
    old_kw_str = kw_m.group(1)
    
    # Parse current keywords
    current_kws = re.findall(r'"((?:[^"\\]|\\.)*)"', old_kw_str)
    new_kws = list(current_kws)
    
    need_change = False
    for j, ckw in enumerate(new_kws):
        for orig, bad in q_repls:
            if ckw.strip() == bad:
                new_kws[j] = orig
                need_change = True
                break
    
    if need_change:
        new_kw_str = ', '.join('"' + k + '"' for k in new_kws)
        # Replace within the full content using absolute positions
        abs_old = 'keywords: [%s]' % old_kw_str
        abs_new = 'keywords: [%s]' % new_kw_str
        content = content[:q_start] + content[q_start:q_end].replace(abs_old, abs_new, 1) + content[q_end:]
        changes_count += 1

print('Reverted %d question keyword arrays' % changes_count)

with open(JS_PATH, 'w') as f:
    f.write(content)
print('File written.')
