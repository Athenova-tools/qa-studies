#!/usr/bin/env python3
"""Find remaining bad keywords."""
import re

JS_PATH = '/home/cmoreira/proj/ISTQB/ISTQB_CTFL_v4.0.1/js/questions.js'
with open(JS_PATH) as f:
    content = f.read()

bad_phrases = [
    "The main purpose of testing","And provide information about quality",
    "Test team has been testing","All test-related documents and artifacts",
    "And documentation testware all test-related","Essential skill for a tester",
    "Their business needs which testing","Example of a component test",
    "Following is a functional test","The patch and the impact",
    "Looping in program execution static","Conditions what type of defect",
    "Following is a black-box test","In state transition testing what",
    "Is a risk of test","Following best describes the test",
    "A test team consistently finds","A good practice in testing",
    "Good practices risk-based early testing","Primary difference between a test",
    "Example of a non-functional test","Parts of the system non-functional",
    "Data what type of testing","Requires maintenance testing confirmation regression",
    "Not standard practice acceptance user","Defect found suspend the review",
    "Defect found suspend the review","Not the process leader static",
    "Don't run the code dynamic","Static don't run the code",
    "Leader manager of the review","Leader manager of the review",
    "Are not boundary values combinations","Of the two statements transition",
    "An advantage of checklist-based testing","Informal based on tester experience",
    "Is the relationship between test","Monitoring measures and tracks progress",
    "Increasing pass rate increasing defect","Affect the project's success test",
    "Affect the project's success test","Invalid input gracefully project risk",
    "The overall testing process severity","Generating test reports test management",
    "Record any interactions management tool","On record-and-playback tools for test",
    "Is true about the testing","Continuous testing and integration context",
    "Continuous feedback on quality testing","Work product in agile testing",
    "And continuous testing agile tester","High informal walkthrough technical review",
    "Knowledge and closing all defect","Always pilot a new tool",
    "And reduces adoption risks automation","Possibly go wrong here based",
    "Higher risk more thorough testing","A characteristic of good test",
    "Assign blame or punish defect","Not decision outcomes branch coverage",
    "The cost of fixing defects","Matches the activities described testing",
    "And fixing the root cause","Cost of fixing early defects",
    "Modules not that exhaustive testing","Testware produced during the test",
    "Process testware all testing artifacts","To identify requirements ambiguity analytical",
    "Before component testing in sequential","Non-functional test types maintenance testing",
    "Term for white-box testing usability","Criteria dynamic analysis requires code",
    "During a review participants have","Planning occurs before individual review",
    "Of valid partitions black-box techniques","Value bva tests the boundary",
    "Bva tests the boundary values","According to the state transition",
    "Cases could cover all branch","Tester's domain knowledge and experience",
    "Provide to stakeholders analogy-based estimation","The correct sequence of risk",
    "The tester do next risk","Priority can differ this defect",
    "Performance testing tools generate load","Quickly and consistently particularly regression",
    "Highlight test monitoring and control","For testers a curious tester",
    "After development testing in iterative","Models such as agile testing",
    "Iteration for continuous feedback testing","Walkthroughs are author-led review meetings",
    "A transition directly from locked","Locked after three failed login",
    "A transition directly from locked","In a centralized test organization",
    "Deviation from the plan environment","Be lower than a defect",
    "Integration and automated regression testing","Common risk of test automation",
    "One specific defect dynamic analysis","The principle exhaustive testing is",
    "The principle exhaustive testing is","But testing is not incremental",
    "During an informal review of","Not replace dynamic testing static",
    "It they can identify coding","Transitions is most likely invalid",
    "The defect be classified severity","A defect is discovered where",
    "Approach based on current conditions","Address prevention error person defect",
    "A team is testing a","Test team within the organization",
    "An organization has testing performed","The role of the tester",
    "During test analysis a tester","For subsequent test design activities",
    "System testing is a test","System testing is a test",
    "Regulatory compliance system testing test","A new tax calculation system",
    "Operational contract regulatory acceptance testing","System what type of testing",
    "Requires maintenance testing including data","That require code execution incremental",
    "Main categories of static testing","Individual preparation not before static",
    "During a code review a","Them during development or testing",
    "A is the boundary value","To achieve high coverage order",
    "Use case testing testing user","Of test cases for branch",
    "Discovery safety-critical often requires white-box","To verify providing structured coverage",
    "To verify providing structured coverage","And adapt their testing based",
    "Designs and executes tests based","Are part of test documentation",
    "A test plan should include","Would best help a test",
    "And assign ownership the test","Not additive or divisive defect",
    "Example of a product risk","Test completion report product risk",
    "Project risk product software quality","Not multiple independent estimates delphi",
]

for bp in bad_phrases:
    if bp in content:
        # Find context
        idx = content.index(bp)
        start = max(0, idx - 50)
        end = min(len(content), idx + len(bp) + 50)
        ctx = content[start:end].replace('\n', '\\n')
        print('FOUND: "%s" at pos %d: ...%s...' % (bp[:50], idx, ctx))
