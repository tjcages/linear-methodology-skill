# Dogfood Log

One entry per project the methodology has been run against — dated, with what worked, what broke, and what changed in `METHODOLOGY.md` as a result. See §15 of the methodology for the protocol this log follows.

Exit criteria for "ready to package" (methodology §15): every §14 open gap resolved or deliberately deferred, plus 2–3 clean runs across genuinely different project types (at minimum one `Tool`, one `Product` with a real launch, ideally one `Drop`/`Marketing`).

---

## Reference implementation — Obi (Socials app)

**Date:** 2026-07-02
**Project type:** `Product` (web + iOS, both platforms shipping)
**Not a dogfood run** — this is the original implementation the methodology was extracted *from*, not a test of the methodology as written. Included here as the baseline every future dogfood run gets compared against (methodology §15, step 4).

**What was built:** Linear project "Obi" — 6 engineering-phase milestones + 9 launch-rollout milestones (15 total), 24 retroactive `Done` issues backfilled from the project's own roadmap doc, 12 open backlog issues for remaining work, area + track issue labels, a `Product` project label, 4 mirrored Documents (manifesto/audit/roadmap/SCOPE-pointer), phase-blocking relations, one project status update.

**Not yet done on the reference project itself** (still applies as gaps): attachment flow never exercised, Initiatives never created/tested.

---

## Planned runs — see `TEST-PLAN.md` for the full brief

Three targets queued, in order. Full detail (what each one is meant to stress-test, what "correct" looks like, what to log) lives in `TEST-PLAN.md` — this is just the tracker.

### 1. The "OB" app (Obi / Socials) — already-tracked path

**Date:** 2026-07-02
**Repo:** `~/Workspace/socials`
**Project type:** `Product`
**Status:** run complete. Tested `METHODOLOGY.md` §1a end-to-end against Obi's fully known existing Linear state (team Off-brand, project Obi).

**What worked:**
- Discovery (§1a step 1) worked cleanly via `get_project` search on "Obi" — found the project without being told the team/project names, matching the "detect before assuming" instruction.
- The enumerate-then-summarize-then-ask sequence held: full state (39 issues, 15 milestones, labels, 5 documents, 1 status update) was read and presented back before any write, and the user confirmed the read before anything happened.
- Zero duplicate issues or milestones created — verified by searching for "editor"/"pages" matches before filing the new native-editor track.
- The yes/no gate actually surfaced a real judgment call live: the user's answer to "extend vs. reorganize" was "extend and improve, it's not finalized" — not a clean binary from the doc's own two options. Handled by treating it as "extend," but this is a real gap (see below).

**What broke / friction hit:**
- **§1a's yes/no questions are pitched as clean binaries; real answers aren't.** The "extend existing structure or reorganize" question got an answer that was neither — "extend, but also feel free to improve/give feedback." Had to interpret this rather than getting a literal yes/no. Methodology now needs to expect a spectrum of answers here, not just gate on a binary.
- **The single biggest finding: an "already tracked" project can still have major untracked initiatives.** Obi's primary North Star doc set (manifesto → audit → migration-roadmap) was fully and accurately mirrored into Linear. But a completely separate, substantial, already-shipped engineering track — a native block-editor rewrite documented in `docs/native-editor-plan.md` — had zero Linear presence: no milestone, no issues, no Document, despite Phases 1–6 being built and Phase 6 owner-approved complete the same day. This was only caught because the backfill cross-check step (§4.5) prompted a look at the actual repo/git history instead of stopping at "the mirrored doc is up to date." Fixed §1a and §4 in place (see below) to make this an explicit check going forward.
- **A second doc's "done" claim conflicted with an already-open Linear issue, and the doc was wrong.** `docs/macos-convergence-plan.md` closed with "macOS is now one-for-one with iPhone in functionality + components," which read as evidence to mark the related open issue (OFF-6) `Done`. The user's own knowledge said that work is still in progress — the doc overclaimed. This is exactly the failure mode the backfill algorithm's evidence rule (§4 step 3) is meant to prevent, but the rule as written didn't anticipate a doc's own prose being the (wrong) "evidence." Added §4 step 8 to require corroborating with the user before letting a doc's completion claim override an existing tracked issue's state.
- **The "off-limits" question in §1a step 3 got a clean "nothing off-limits" answer, but that turned out to be slightly wrong in practice** — OFF-6 effectively *was* off-limits (still WIP), just not because anyone said so upfront; it surfaced mid-session once a doc conflict made it relevant. The lesson isn't that the question was badly asked — it's that off-limits status can be discovered mid-session, not just declared upfront, and the methodology should treat a live doc/issue conflict as its own trigger to re-ask, not assume the original blanket answer still covers it.

**Was retroactive backfill (§4) run correctly a second time?** Yes, and it found real gaps a static read of the "already tracked" project would have missed — the point of the backfill algorithm's cross-check step proved itself here in a way it hadn't on the original Obi rollout (where it was the *only* pass, with nothing to cross-check against yet).

**What shipped in Linear this run:** 8 new milestones (`Editor: Phase 1–8`), 8 new issues (OFF-43–OFF-50, six `Done` + one `In Progress` + one `Backlog`), one `blockedBy` relation (Phase 8 ← Phase 7), one mirrored Document (native-editor-plan.md), one project status update. Zero changes to the pre-existing 39 issues / 15 milestones / 5 documents.

### 2. Traces — fresh bootstrap, `Tool`

**Date:** TBD
**Repo:** unknown — not found under `~/Workspace/`; ask the user for the path before starting.
**Project type:** `Tool`
**Status:** planned, not yet run.

### 3. "Visual cursor" (unnamed) — fresh bootstrap, `Tool`, small-project edge case

**Date:** TBD
**Repo:** unknown — ask the user for the path before starting.
**Project type:** `Tool`
**Status:** planned, not yet run. Tests the small/early-stage North Star judgment call in §1b.
