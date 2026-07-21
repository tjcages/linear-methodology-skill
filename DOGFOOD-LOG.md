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

**Date:** 2026-07-02 (run after Target 3 — the repo path arrived second)
**Repo:** `~/Workspace/traces` (standalone skill repo, github.com/tjcages/traces, symlinked into `~/.claude/skills/traces`)
**Project type:** `Tool` (a Claude Code skill — progress-log engine + installer, 27 commits, v0.1.0 cut same day)
**Status:** run complete.

**What worked:**
- Second consecutive clean §1a fresh-bootstrap resolution (one `list_projects` query) and second clean run of the §1b judgment call: README + SKILL.md together are the North Star (the SKILL.md *is* the method doc) — user agreed without amendment.
- **The backfill algorithm hit its best case: a real CHANGELOG.** Highest-signal source ranked exactly as §4 predicts — CHANGELOG [0.1.0] was already feature-organized, so 8 `Done` issues fell straight out of its section structure, with the 27-commit git log corroborating each. Faster and cleaner than either previous backfill (Obi: roadmap doc; visual-cursor: single commit + README).
- Label-group pattern from the visual-cursor run reused verbatim (`traces` group → `engine`/`tabs`/`installer`/`method`) — the §4/§13 fix generalized on first reuse.
- **Backfill as audit, again:** the cross-check surfaced a doc/reality contradiction — the CHANGELOG claims the repo dogfoods its own `progress/` log, but no `progress/` directory exists. User wasn't sure either (likely a leftover from when Traces lived inside socials). Filed as an open issue (OFF-78: make doc and reality agree) rather than assuming either direction — the §4-step-8 lesson from Target 1 (corroborate, don't trust prose) applied within the same day.
- Meta-goal question again did the structural work: "distribute/publish it" → same three-track shape as visual-cursor (backfill / distribution readiness / rollout), with the channel decision (OFF-76) explicitly marked as the gate.

**What broke / friction hit:**
- **Mid-session revisit of Target 3 exposed the real gap: bootstrap doesn't install the discipline.** Within an hour of visual-cursor's bootstrap, parallel sessions had landed a commit (security hardening) and WIP (ESLint/CI) that Linear knew nothing about — and the *user* had to notice and ask for a re-scan. The reference implementation solved this with a CLAUDE.md tracking protocol; the methodology described that discipline (§5) but never said "installing it into the repo is a bootstrap step." Fixed: §5 now makes ruleset-installation a first-class bootstrap step. Neither visual-cursor nor traces has the ruleset installed yet — flagged to the user as the follow-up that closes this gap for real.
- Tool friction, minor: `save_project`'s `icon` param rejected both attempted icon names with no discoverable allowlist (created the project without an icon); one `save_milestone` call failed on a transient harness-side classifier error and succeeded verbatim on retry. Neither is a methodology problem; both are worth knowing for a packaged skill (icon: omit unless the name is known-good; transient failures: retry once before rerouting).

**Comparison to the Obi reference (§15 step 4):** recognizable same-shape again — 3 milestones, 13 issues (8 Done backfill + 5 open), 3 `blockedBy` relations, label group, bootstrap status update. The CHANGELOG-driven backfill produced the cleanest evidence trail of the three runs.

**What shipped in Linear:** project `traces` (team Off-brand, `Tool` label), 3 milestones, 13 issues (OFF-68–OFF-80), label group + 4 module labels, 3 relations, 1 status update. Plus, same session on visual-cursor (revisit): OFF-62–OFF-67 (1 Done security backfill, 1 In Progress CI, 4 launch-readiness items incl. a QA matrix), 3 more relations.

### 3. "Visual cursor" (visual-cursor) — fresh bootstrap, `Tool`, small-project edge case

**Date:** 2026-07-02 (run out of order — Target 2's repo path wasn't available yet; user supplied this one first)
**Repo:** `~/Workspace/visual-cursor`
**Project type:** `Tool` (Vite plugin + React overlay, dev-only npm package — 4 source files, ~1,300 LOC, 1 commit)
**Status:** run complete.

**What worked:**
- §1a resolved in one query: the workspace has exactly one project (Obi), nothing matching — clean fresh-bootstrap. The already-tracked path's caution never triggered, correctly.
- **The North Star judgment call (the thing this target was chosen to stress) worked as written.** The call: the README is already a README-as-vision (what/who/how/constraints, unusually complete for a v0.1) — skip the doc-writing exercise. Said so explicitly per §1b's instruction; user agreed immediately. The anchoring-questions fallback never ran, and didn't need to.
- **§1b question 5 (the tracking meta-goal) was the decisive question of the whole run.** Expected answer for a tiny tool: "just a durable record." Actual answer: "ship to npm and launch — website, launch tweet, follow-up marketing, portfolio, assets." That single answer converted the structure from one milestone + a handful of issues into three tracks (engineering backfill / launch readiness / rollout) with real cross-track `blockedBy` relations. Size predicted nothing; the meta-goal predicted everything.
- Granularity question (§4): asked explicitly; user chose feature-level even at this size — 5 backfilled `Done` issues from a single commit's evidence (README + shipped source). The question did not feel like friction at this size, contra the test plan's worry — it took one question and shaped the backfill correctly.
- §11 checklist: everything manual was already done at the workspace level (project labels exist, connector authorized) — surfaced as "nothing for you to click," which is the §0 one-time-cost-per-workspace claim working as designed on the second project.

**What broke / friction hit:**
- **Issue labels are team-scoped, and the methodology's Tool guidance collides with its own multi-project convention.** §2 says a Tool's area labels should be its internal seams (`stamp`/`agent`/`overlay`), but §13 says many projects share one team — so those module labels would land in the same namespace as Obi's labels, where a bare `agent` label is actively confusing. Solved with a Linear **label group** named after the project (creatable via the API — `isGroup` + `parent`), children = the module labels. The methodology didn't mention label groups at all; §4 and §11 now do.
- **§7 claimed launch readiness is "relevant mainly to Product projects" — wrong.** This run produced a `Tool` with a full launch-readiness + rollout structure because the *goal* was a launch. Fixed §7 to key the track off the §1b-question-5 answer, not the project type.
- **Judgment call, logged not yet doc'd:** did *not* mirror the README as a Linear Document, despite the Obi reference mirroring all its North Star docs. Reasoning: an npm package's README is its public, single-source doc; a Linear mirror adds a sync burden with no discovery value when the project description already links it. This is a calibration the methodology's mirroring guidance doesn't currently express — worth revisiting if a future run hits the same call.

**Comparison to the Obi reference (§15 step 4):** same recognizable shape at 1/10 the scale — backfilled `Done` history in a milestone, forward tracks with wired dependencies, labels, a bootstrap status update. Proportionality held: 3 milestones vs. 15, 11 issues vs. 39+, no Documents vs. 5.

**What shipped in Linear:** project `visual-cursor` (team Off-brand, `Tool` label, lead ty), 3 milestones, 11 issues (OFF-51–OFF-61: 5 Done backfill + 4 launch-readiness + 2 rollout), 4 `blockedBy` relations, 1 label group + 3 module labels, 1 status update.

---

## Post-run feedback — 2026-07-02

Owner reviewed the created issues: descriptions/comments **too verbose**. Root cause: the methodology said "preserve source detail" (§4.4) with no length ceiling, so preservation became prose. Fix: hard writing rules added to §4 (titles ≤8 words, descriptions ≤3 sentences/5 bullets, comments ≤3 lines, screenshot-over-description), mirrored in SKILL.md and all three repo CLAUDE.md protocols.

### 4. shader-panel — first run through the packaged skill

**Date:** 2026-07-03
**Repo:** `~/Workspace/shader-panel` (moved from Desktop, renamed from shader-dev)
**Project type:** `Tool` — already launched (npm v1.0.0)
**Status:** run complete, via `Skill(linear-methodology)` — the installed skill, not the raw doc.

**What worked:** SKILL.md's condensed flow was sufficient — no need to open METHODOLOGY.md. New meta-goal answer surfaced: "already launched, marketing push" → single `Marketing push` milestone, no readiness track. Per-release granularity chosen (first time) — 3 Done issues straight from CHANGELOG, module labels correctly skipped. Terse-writing rules applied throughout; hero.webp attached at bootstrap.

**Friction:** none methodology-level. The skill's operating order held for a fourth project shape (launched-quietly, announce-later).

---

## Round-out — v1.1 operationalization — 2026-07-21

**Not a project run** — a self-dogfooding pass on the methodology itself, per §15's "the tool eats its own dogfood" discipline applied to the tool.

**What broke:** across the 5 runs the *principles* held, but the doc was light on **operationalization** — it said what good looks like without a way to decide the setup shape up front, judge when setup is actually "done," or audit a project that already exists. "Is this tracked well?" had no answerable form; rescuing a messy/half-tracked project meant re-deriving the steps each time; there was no scoreable exit for a bootstrap.

**What changed:** added §17–§26 (Extended guidance band) — a project-shape decision tree (§17), a scoreable readiness rubric (§18, threshold ≥16/20), anti-patterns table (§19), cadence rules (§20), maintenance-mode (§21), migration/rescue playbooks (§22), milestone-design (§23), issue taxonomy (§24), compatibility matrix (§25), and a runnable self-audit (§26) that outputs a gap list. Added EXAMPLES.md (before/afters grounded in these runs + one messy project fixed step by step) and CHANGELOG.md (v1.0.0 / v1.1.0). SKILL.md, README.md, and this log updated to surface the new material. No §0–§16 meaning changed — the round-out sits on top of a validated core, sourced from the friction and judgment calls these 5 runs already recorded (label groups, doc-claims-as-evidence, meta-goal-over-type, untracked-second-track).

**Tracked as:** OFF-196 → OFF-207 in linear-methodology-skill (milestone `Package & launch`).

---

## Packaging — universal Agent Skills — 2026-07-21

**Not a project run** — packaging dogfood on the skill itself (§15 applied to distribution).

**What broke:** the artifact was already Agent Skills–shaped (`skills/linear-methodology/SKILL.md`), but distribution and §5 language were Claude-only — `install.mjs` wrote solely to `~/.claude/skills/`, README called it a Claude Code skill, and the discipline step hardcoded `CLAUDE.md`. Cursor/Codex users had to invent their own install path; multi-agent repos got a protocol only one agent would load.

**What changed (v1.1.1):** skills CLI (`npx skills add … -g -a '*'`) is the recommended universal install; `install.mjs` now copies into Claude / Cursor / Codex / `.agents` skill dirs and ships `EXAMPLES.md`; §5 + SKILL.md + EXAMPLES name `CLAUDE.md` / `AGENTS.md` / `.cursor/rules/` as the always-loaded homes. No methodology meaning change beyond that portability.

**Install exercised this session:** `npx skills add <local-repo> -g -a '*' -y` → canonical at `~/.agents/skills/linear-methodology` (v1.1.1), discovered by Cursor / Claude Code / Codex + ~70 other agents. Eve and PromptScript skipped (no global skill install).

**Tracked as:** [OFF-208](https://linear.app/off-brand-studio/issue/OFF-208/universal-agent-skills-packaging) (milestone `Package & launch`; related OFF-88 / OFF-89 / OFF-113).