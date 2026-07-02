---
name: linear-methodology
description: >-
  Set up and maintain Linear project tracking the right way — a methodology,
  not an API wrapper. Use whenever: the user asks to "set up Linear tracking",
  "track this project in Linear", "add this repo to Linear", "backfill our
  history into Linear", or "get this project ready to track"; a project needs
  its Linear structure designed (milestones, labels, backfill, launch tracks);
  an already-tracked project needs extending, auditing, or a second work track
  discovered and filed; or tracking has gone stale and needs reconciling with
  reality. Anchors every milestone/issue to the project's own North Star doc,
  backfills real shipped history as Done issues with evidence, wires real
  blockedBy/blocks dependencies, sets dates only with a real signal, and
  installs the per-session tracking discipline into the repo's CLAUDE.md. NOT
  for one-off Linear CRUD (creating a single issue, commenting) — the Linear
  MCP handles that directly.
---

# Linear tracking methodology

You are setting up (or extending) Linear tracking for a project. The full methodology lives in [METHODOLOGY.md](./METHODOLOGY.md) — this file is the operating order. Follow the steps **in sequence**; the early gates exist because getting them wrong corrupts real workflows.

**The thesis (§0):** tracking structure disconnected from why the project exists decays into tickets nobody trusts. Every phase, milestone, and issue must be a *derivation* of something true about the project — its North Star doc, its shipped history, its actual goal — never an invention of the tracking tool.

## The operating order

### 1. Gate: is this project already tracked? (§1a — read it in full before anything)

Search Linear for an existing project (by repo name AND by asking the user). Never assume a blank slate.

- **Nothing exists** → fresh bootstrap; continue below.
- **A project exists** → STOP. Discovery mode: enumerate everything (issues open+closed, milestones, labels, documents, status updates), summarize back to the user, and get explicit per-category yes/no answers (§1a step 3) **before any write**. Extend conservatively; never reorganize unasked; search before every single create. Also scan the repo's docs for roadmap-shaped docs that were *never* mirrored — "already tracked" describes the project, not every initiative inside it (§4 step 7).

### 2. North Star (§1b)

Find the project constitution — manifesto, README-as-vision, strategy doc. **A good README usually is the North Star** (the common case); say your call out loud either way. Only if nothing qualifies and the project is substantial: ask the anchoring questions (§1, the 6) and write a lightweight doc. Never silently skip; never force a manifesto on a weekend script.

**Question 5 is the structural keystone:** *what is the user trying to achieve by tracking this?* A launch goal produces launch-readiness + rollout tracks (§7/§8) even for a tiny tool; "durable record" produces backfill + backlog only. The answer — not project size or type — decides the shape.

### 3. Project type (§2)

`Product` / `Tool` / `Drop` / `Marketing` (a suggested set, not a law). Products get platform area labels (`iOS`/`Web`/`Backend`); Tools get module-seam labels — **namespaced under a project-named label group** when the team hosts multiple projects (§4), since issue labels are team-scoped. 3–5 labels max; skip labels entirely if the project is too small to filter.

### 4. Derive structure (§3)

Milestones = the roadmap's phases 1:1 — never invented. Separate timelines get separate milestone sets (engineering / launch readiness / rollout), never folded together. **Target dates only with a real signal** — a fabricated date is worse than none. Cycles are manual-only (§11); default to milestones.

### 5. Backfill (§4 — the highest-value first pass)

Run the algorithm: enumerate sources (roadmap doc, CHANGELOG, git log — CHANGELOG is the best when it exists) → extract per shipped *feature*, not per commit → `Done` only with evidence (a checkmark, a merged commit, a "shipped" note) → file into the right milestone preserving the source's own detail → cross-check that Done + backlog reconstructs the roadmap. Ask the granularity question explicitly (feature-level is the confirmed default). Two hard-won rules: a doc's own "done" claim is evidence, **not proof** — corroborate with the user before it overrides a live issue (§4 step 8); and scan for *other* roadmap docs beyond the known one (§4 step 7).

### 6. Wire it (§4, §10, §11)

Real `blockedBy`/`blocks` for genuine sequencing (launch beats blocked by readiness items). Attach visual evidence to issues via the validated upload flow (§10 — 60s signed-URL expiry, one file at a time, exact byte size). Surface the manual-vs-API checklist (§11) early: Cycles, project labels, Initiatives, GitHub integration, and the OAuth grant are UI-only; everything else automates.

### 7. Install the discipline (§5 — bootstrap is not done without this)

Write the tracking protocol into the repo's `CLAUDE.md` with the actual team/project/milestone/label names filled in: search-before-create, non-trivial-work-gets-an-issue, every-issue-gets-a-milestone, Backlog→In Progress→Done lifecycle (never skip to Done), close-the-loop-before-session-end, Linear's generated branch names. Without this, tracking goes stale the first time a different session ships work.

### 8. Keep it honest (§6, §9)

Status updates at real milestone moments only — phase completions and health changes, not routine work. Dates are accountability: as a target approaches with issues not trending Done, post `atRisk` and say it in chat — before the date passes, not after. Suggest a North Star drift audit at each phase close. Bad news gets reported the moment it's known.

## What good output looks like

A project a stranger can read: backfilled `Done` history proving what shipped (with evidence in every description), open work in dated-or-undated milestones matching the real plan, dependencies visible in relations rather than tribal knowledge, and a repo whose own CLAUDE.md keeps every future session honest. See [DOGFOOD-LOG.md](./DOGFOOD-LOG.md) for three real before/afters.
