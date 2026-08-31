# QA Test Plan

## 1. Scope

Validate the functional behaviour, state handling and presentation of the Neon Vault prototype before portfolio release.

## 2. Test Types

- Smoke testing
- Functional testing
- Regression testing
- Edge-case testing
- UI/responsive testing
- Exploratory testing

## 3. Environment

Primary targets:

- Chrome desktop
- Safari desktop
- Chrome mobile viewport
- Safari/iPhone viewport

## 4. Core Test Cases

| ID | Area | Test | Expected Result |
|---|---|---|---|
| QA-001 | Spin | Spin with enough credits | Bet deducted once and grid resolves |
| QA-002 | Credits | Base spin accounting | Credits = previous − bet + win |
| QA-003 | Payline | 3 matching symbols from left | Correct line win returned |
| QA-004 | Payline | Match starts on reel 2 | No line win |
| QA-005 | Wild | Wild between matching symbols | Wild substitutes and win continues |
| QA-006 | Scatter | 3+ Scatters anywhere | Five free spins awarded |
| QA-007 | Free Spin | Spin while free spins > 0 | No credit deduction; free-spin count decreases |
| QA-008 | Bet | Increase/decrease bet | Only defined bet values available |
| QA-009 | Low Credits | Credits below bet | Spin blocked with clear message |
| QA-010 | UI | Rapid double click Spin | Only one spin transaction occurs |
| QA-011 | UI | Mobile width | Reels/controls remain usable without horizontal overflow |
| QA-012 | Paytable | Open/close modal | Content displayed and dialog closes correctly |

## 5. Regression Suite

After any change to game logic, rerun at minimum:

- QA-001 to QA-010
- Wild line evaluation
- Scatter/free-spin trigger
- Credit accounting
- Spin lock state

After any CSS/layout change, rerun:

- QA-011
- Paytable/help dialogs
- Spin and bet controls

## 6. Severity Definitions

**Critical:** Prototype unusable, data/state corruption, spin cannot complete.  
**Major:** Core rule produces incorrect result, credits incorrect, bonus broken.  
**Medium:** Feature works but gives wrong/unclear feedback.  
**Minor:** Cosmetic or polish issue with no impact on core gameplay.

## 7. Exit Criteria

- 0 Critical open defects
- 0 Major open defects
- Core regression suite passes
- Desktop and mobile smoke test passes
- Known Medium/Minor issues documented
