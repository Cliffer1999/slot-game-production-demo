# Neon Vault — Slot Game Production Demo

A small browser-based slot prototype built as a **Game Producer portfolio project**. The purpose is not to simulate a commercial gambling product; it demonstrates how I structure a game from concept through production planning, QA, risk tracking and release readiness.

> **Portfolio prototype only:** simulated credits, no deposits, no real-money wagering, no cash-out.

## What the demo includes

- 5 reels × 3 rows
- Five fixed paylines
- Weighted symbol generation
- Wild substitution
- Scatter-triggered free spins
- Adjustable simulated bet
- Responsive desktop/mobile UI
- Paytable and in-game help

## Producer-focused deliverables

The key portfolio value is the workflow around the prototype:

- [Game Design Document](docs/GAME_DESIGN_DOCUMENT.md)
- [Production Plan](docs/PRODUCTION_PLAN.md)
- [QA Test Plan](docs/QA_TEST_PLAN.md)
- [Bug Log](docs/BUG_LOG.md)
- [Risk Register](docs/RISK_REGISTER.md)
- [Release Checklist](docs/RELEASE_CHECKLIST.md)
- [Change Log](docs/CHANGE_LOG.md)

## Production lifecycle demonstrated

`Concept → Scope → Prototype → Alpha → QA → Regression → Release Candidate → Release`

The project intentionally connects the work of **design, engineering, QA, art/UX and compliance/release readiness** rather than focusing only on coding.

## Run locally

No build step or package install is required.

1. Download or clone the repository.
2. Open `index.html` in a modern browser.

For the cleanest local experience, you can also serve the folder with any simple static HTTP server.

## GitHub Pages

This project is static and can be hosted directly with GitHub Pages. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Git / GitHub

## QA approach

The test plan covers:

- Functional gameplay rules
- Win evaluation
- Wild/Scatter behaviour
- Credit and bet accounting
- Free-spin state handling
- UI responsiveness
- Regression coverage after fixes
- Edge cases including low-credit states

Example defects are recorded in `docs/BUG_LOG.md` using a reproducible format: build, severity, steps, expected result, actual result, status and regression result.

## Portfolio context

This project was created to demonstrate a transition from **Game QA + software engineering + land-based gaming operations** into **Game Production**. It reflects the kind of cross-functional coordination and structured decision-making expected from a producer, while keeping the playable scope intentionally small and reviewable.
