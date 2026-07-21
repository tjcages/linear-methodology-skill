# Changelog

Methodology changelog. Terse, newest first. The methodology's own §15 self-dogfooding discipline drives what lands here — see [DOGFOOD-LOG.md](./DOGFOOD-LOG.md).

## v1.2.1 — 2026-07-21

Always-on automation + clearer install path.

**Added:** `linear-finish-install` skill (writes Cursor User Rule via agent, probes auth, opens Automations). `shared/ALWAYS_ON.md`. Installer auto-upserts always-on into `~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, `~/.agents/AGENTS.md`.

**Changed:** INSTALL/README → **2 steps** (skills add → “finish linear-tracking install”) with hyperlinks for MCP / Automations / Settings. AUTOMATION.md: default **7:00 AM user-local**; document UTC cron conversion (fix wrong afternoon display from naive `0 9`/`0 7` prefills).

## v1.2.0 — 2026-07-21

Journey redesign (1B soft nudge · 2C required Monitor Automation).

**Added:**
- Skill pack: `linear-setup`, `linear-sync`, `linear-monitor`, `linear-discipline` (+ `linear-methodology` alias).
- `shared/` — RESPONSE.md (ADHD Linear chat), AUTH.md (Step 0), AUTOMATION.md (required weekly recipe), METHODOLOGY.md, EXAMPLES.md.
- `JOURNEY.md` — end-to-end path + edge-case matrix.
- `INSTALL.md` — always-on snippet, auth, Automation gate, verify/update/uninstall.

**Changed:** README front door; `install.mjs` installs the full pack; package 1.2.0.

**What existing users should update:**
1. `npx skills add tjcages/linear-methodology-skill -g -a '*' -y`
2. Paste always-on snippet from INSTALL.md
3. Create Monitor Automation from AUTOMATION.md
4. Existing Linear boards stay valid — no re-bootstrap required

## v1.1.1 — 2026-07-21

Universal Agent Skills packaging pass — same methodology, installable on Cursor / Claude Code / Codex (and other skills.sh agents).

**Changed:**
- README + `package.json` reframed as an Agent Skill (not Claude-only); skills CLI `-a '*'` is the recommended install.
- `bin/install.mjs` copies into `~/.claude`, `~/.cursor`, `~/.codex`, and `~/.agents` skill dirs; includes `EXAMPLES.md`.
- SKILL.md / METHODOLOGY.md / EXAMPLES.md: §5 discipline installs into always-loaded agent instructions (`CLAUDE.md`, `AGENTS.md`, and/or `.cursor/rules/`), not CLAUDE.md alone.

**What existing users should update:** re-install via `npx skills add tjcages/linear-methodology-skill -g -a '*' -y` (or re-run the npx installer). Existing Linear setups stay valid.

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
