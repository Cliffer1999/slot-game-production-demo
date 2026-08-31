# Game Design Document — Neon Vault

## 1. Product Summary

**Working title:** Neon Vault  
**Format:** Browser-based slot game prototype  
**Grid:** 5 reels × 3 rows  
**Paylines:** 5 fixed lines  
**Audience:** Portfolio reviewers / game production hiring teams  
**Commercial status:** Non-commercial prototype only

## 2. Design Goal

Create a compact, visually polished slot prototype that can be understood in under two minutes while providing enough mechanics to demonstrate a realistic production and QA workflow.

## 3. Core Loop

1. Player chooses a simulated bet.
2. Player presses Spin.
3. Five reels resolve into a 5×3 symbol grid.
4. Five fixed paylines are evaluated from left to right.
5. Winning combinations return simulated credits.
6. Three or more Scatters award five free spins.
7. Loop repeats.

## 4. Symbols

| Symbol | Role | Relative Frequency | Notes |
|---|---|---:|---|
| Crown | Premium | Low | Highest regular-symbol value |
| Gem | High | Low-medium | Premium visual symbol |
| Seven | Medium-high | Medium | Familiar slot motif |
| Bolt | Medium | Medium-high | Theme support |
| Star | Low | High | Frequent base symbol |
| Wild | Special | Low | Substitutes for regular symbols |
| Scatter | Bonus | Very low | 3+ anywhere awards 5 free spins |

## 5. Payline Rules

Five fixed paylines:

1. Middle row
2. Top row
3. Bottom row
4. V shape
5. Inverted V shape

A regular line win requires 3+ matching symbols from the leftmost reel. Wild substitutes for regular symbols. Scatter does not substitute and is evaluated independently.

## 6. Bet / Credit Rules

- Starting credits: 1,000 simulated credits
- Bet options: 10 / 20 / 50 / 100
- Base spin deducts current bet before outcome evaluation
- Free spins do not deduct credits
- Wins are added after evaluation
- No deposit, cash-out or money conversion exists

## 7. Bonus Rule

Three or more Scatters anywhere on the grid award five free spins. The bonus can trigger while a free spin is already active, adding additional free spins.

## 8. UX Requirements

- Current credits, bet, last win and free spins always visible
- Spin button is visually dominant
- Clear feedback for win, bonus and insufficient-credit states
- Responsive layout for mobile and desktop
- Paytable accessible without leaving the game
- Explicit non-commercial / simulated-credit disclaimer

## 9. Out of Scope

- Real-money wagering
- Account creation
- Payments or wallet integration
- Cash-out
- Server-side RNG
- Jurisdictional certification
- Commercial RTP tuning
- Production artwork/audio pipelines

## 10. Definition of Done

The prototype is ready for portfolio release when:

- Core spin loop functions without blocking defects
- All five paylines evaluate correctly
- Wild and Scatter rules pass functional tests
- Credit accounting passes regression tests
- UI is usable on desktop and mobile
- Production, QA, risk and release documents are complete
