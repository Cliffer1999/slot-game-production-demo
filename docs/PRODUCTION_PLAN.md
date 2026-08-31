# Production Plan

## Objective

Deliver a reviewable slot-game prototype together with the documentation a producer would use to coordinate design, engineering, QA and release readiness.

## Milestones

| Milestone | Deliverable | Exit Criteria |
|---|---|---|
| M0 — Concept | Theme, feature set, scope | Core loop and out-of-scope items agreed |
| M1 — Prototype | Reel grid, spin loop, weighted symbols | Prototype runs in browser |
| M2 — Alpha | Paylines, Wild, Scatter, credits, bet control | All core mechanics implemented |
| M3 — UX Pass | Responsive UI, paytable, messaging | Usable on desktop/mobile |
| M4 — QA | Functional tests and defect log | Critical/major defects resolved |
| M5 — RC | Regression pass, docs complete | Release checklist passes |
| M6 — Portfolio Release | GitHub repository + Pages deployment | Public review link available |

## Workstreams

### Design
- Theme and symbol hierarchy
- Core loop and bonus behaviour
- UX requirements
- Paytable readability

### Engineering
- Weighted symbol selection
- Grid rendering
- Payline evaluation
- Credit/free-spin state
- Responsive UI

### QA
- Functional test cases
- Edge cases
- Defect reproduction
- Regression verification

### Production
- Scope control
- Milestone tracking
- Risk/dependency management
- Documentation
- Release readiness

## Dependencies

- Paytable cannot be finalised until symbol hierarchy and payout multipliers are defined.
- Regression testing depends on stable feature behaviour after Alpha.
- Release candidate is blocked by unresolved critical/major defects.
- Portfolio publication depends on final documentation and mobile QA pass.

## Scope Control

Any new feature must answer three questions before entering scope:

1. Does it demonstrate a Producer/QA capability not already visible?
2. Can it be implemented and regression-tested without destabilising the core loop?
3. Is it more valuable than improving documentation or polish?

If not, it is deferred to a future version.

## Status Reporting Template

**Status:** Green / Amber / Red  
**Completed:**  
**Next:**  
**Risks:**  
**Decisions required:**  
**Blocking issues:**
