# Risk Register

| ID | Risk | Likelihood | Impact | Owner | Mitigation | Status |
|---|---|---|---|---|---|---|
| R-01 | Feature scope grows beyond portfolio objective | Medium | High | Producer | Enforce MVP/out-of-scope rules | Controlled |
| R-02 | Payline logic produces incorrect wins | Medium | High | Engineering/QA | Deterministic test cases + regression suite | Controlled |
| R-03 | Credit accounting fails during bonus state | Medium | High | Engineering/QA | Separate free-spin transaction path | Controlled |
| R-04 | Visual polish reduces mobile usability | Medium | Medium | UX/QA | Mobile breakpoint smoke tests | Controlled |
| R-05 | Prototype is mistaken for a real gambling product | Low | High | Producer | Prominent simulated-credit/no-cash-out disclaimer | Controlled |
| R-06 | Documentation becomes disconnected from current build | Medium | Medium | Producer | Update docs as part of Definition of Done | Active |
| R-07 | Late feature changes destabilise release candidate | Medium | High | Producer | Feature freeze at RC; fixes only | Controlled |

## Escalation Rule

Any risk with **High impact** that becomes likely or blocks a milestone moves the project to **Amber** until a mitigation owner and next action are confirmed.
