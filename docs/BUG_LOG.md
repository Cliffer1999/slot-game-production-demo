# Bug Log

The following defects are included as examples of a structured QA workflow used during prototype development.

## BUG-001 — Spin button can trigger twice before state lock

**Build:** 0.2.0  
**Severity:** Major  
**Status:** Fixed / Regression Passed

**Steps to reproduce**
1. Load the prototype.
2. Double-click Spin rapidly.
3. Observe credit deduction and animation state.

**Expected**  
Only one spin transaction is accepted while a spin is in progress.

**Actual**  
Two spin requests can begin before the UI lock is applied.

**Fix**  
Move spin-state lock to the beginning of the spin handler and disable spin/bet controls immediately.

**Regression result**  
Passed: repeated rapid clicks produce one transaction only.

---

## BUG-002 — Free spin incorrectly deducts base bet

**Build:** 0.2.1  
**Severity:** Major  
**Status:** Fixed / Regression Passed

**Steps to reproduce**
1. Set `freeSpins` greater than zero.
2. Record current credits.
3. Trigger a spin.

**Expected**  
Free-spin count decreases by one and credits are not reduced by the bet.

**Actual**  
Bet is deducted before free-spin state is checked.

**Fix**  
Evaluate free-spin state before base-spin credit deduction.

**Regression result**  
Passed across 10 consecutive free spins.

---

## BUG-003 — Wild incorrectly continues through Scatter

**Build:** 0.3.0  
**Severity:** Medium  
**Status:** Fixed / Regression Passed

**Steps to reproduce**
1. Construct a line containing Wild, matching regular symbol, then Scatter.
2. Evaluate the line.

**Expected**  
Scatter terminates the regular payline sequence.

**Actual**  
Line evaluator treats Scatter as part of the matching sequence in one edge case.

**Fix**  
Explicitly break payline evaluation when Scatter is encountered.

**Regression result**  
Passed with Wild + regular + Scatter combinations across all five lines.

---

## BUG-004 — Mobile symbol labels cause grid overflow

**Build:** 0.3.2  
**Severity:** Minor  
**Status:** Fixed

**Expected**  
Five reels remain visible on narrow mobile displays.

**Actual**  
Symbol labels increase minimum cell width and cause horizontal overflow.

**Fix**  
Hide secondary symbol labels under the mobile breakpoint and reduce reel gap.
