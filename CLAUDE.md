# linear-methodology-skill — agent instructions

A methodology (→ distributable Claude Code skill) for how AI agents set up and maintain Linear project tracking. `METHODOLOGY.md` is the artifact; `DOGFOOD-LOG.md` is the evidence; `TEST-PLAN.md` was the validation brief. Read `README.md` first.

## Linear tracking (non-negotiable)

Every agent, every session. Linear workspace: **team "Off-brand"**, **project "linear-methodology-skill"**. Structure in place: milestones `Methodology + dogfood validation` (done) / `Package & launch` (active, target 2026-07-03). No module labels — the repo is three markdown files. The tracking goal is **package and launch as a distributable skill**; the gating decision is the packaging format (OFF-88).

- **Search before creating.** Never file a duplicate for work already tracked.
- **Non-trivial work gets an issue** in **linear-methodology-skill**, filed when the work is identified. Doc typo fixes don't need one; a new methodology section, a packaging decision, or a distribution step does.
- **Every issue gets a milestone.** `Package & launch` for anything on the road to distribution.
- **Lifecycle is real.** `Backlog` → `In Progress` at start → `Done` only when actually shipped/committed. Session ending mid-work leaves it `In Progress` with a comment.
- **Wire real dependencies** (`blockedBy`/`blocks`) — the wrapper is blocked by the format decision; the announcement by the wrapper.
- **Close the loop before ending a session** — update issue state/comments for any tracked work before finishing.
- **This repo eats its own dogfood.** Changes to METHODOLOGY.md driven by real usage get logged in DOGFOOD-LOG.md with what broke and what changed — the methodology's own §15 discipline applies to itself.
- **Use Linear's generated branch names** (`ty/off-N-slug`) so commits/PRs auto-link.
