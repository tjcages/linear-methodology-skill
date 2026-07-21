# Changelog

Methodology changelog. Terse, newest first. The methodology's own §15 self-dogfooding discipline drives what lands here — see [DOGFOOD-LOG.md](./DOGFOOD-LOG.md).

## v1.1.0 — 2026-07-21

The operationalization round-out: from "good practice" to a repeatable system with guardrails.

**Added — ten Extended-guidance sections (§17–§26) in METHODOLOGY.md:**
- §17 Project-shape decision tree — which tracking setup fits this repo.
- §18 Completeness & readiness rubric — a scoreable 0–2 × 10-dimension check for "is setup done?" (threshold ≥16/20).
- §19 Anti-patterns & failure modes — symptom → why → fix.
- §20 Update cadence rules — when to post a status update, and when not to.
- §21 Maintenance-mode guidance — how the method changes after launch.
- §22 Migration & rescue playbooks — messy / half-tracked / backfill-late flows.
- §23 Milestone design guide — how many, milestone vs. issue, outcome naming.
- §24 Issue taxonomy — categories, and split-by-milestone-not-labels.
- §25 Compatibility matrix — solo vs. team vs. reusable-library conventions.
- §26 Self-audit pass — a runnable procedure that outputs a gap list + fixes.

**Added — files:**
- `EXAMPLES.md` — before/after transformations, plus one messy project fixed step by step.
- `CHANGELOG.md` — this file.

**Changed:** version line added under the METHODOLOGY.md H1; §0 now points readers to the Extended-guidance band; SKILL.md, README.md, and DOGFOOD-LOG.md updated to reference the new material.

**What existing users should update:** nothing in §0–§16 changed meaning — existing setups stay valid. Pull the new sections, then run the §26 self-audit against your live projects to score them (§18) and catch anti-patterns (§19). New setups should start at §17 to pick a shape.

## v1.0.0

Initial extraction + dogfood validation. The core methodology (§0–§16): North Star anchoring, project-type decisions, structure derivation, the backfill algorithm, lifecycle discipline, drift audits, launch-readiness and rollout tracks, accountability/cadence, attachments, the manual-vs-API split, cross-project Initiatives, and multi-project conventions. Extracted from the Obi production rollout, then validated across the five runs recorded in DOGFOOD-LOG.md (Obi already-tracked path, traces, visual-cursor, shader-panel, plus the Obi reference baseline).
