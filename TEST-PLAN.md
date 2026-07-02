# Test Plan — Dogfooding the Linear Tracking Methodology

**Read this whole file before doing anything.** This is a handoff document for an agent with no memory of how this methodology was built — everything you need is here or in `METHODOLOGY.md`.

## What you're doing

`METHODOLOGY.md` in this repo is a draft methodology for setting up and maintaining Linear project tracking with an AI agent. It's not yet a packaged skill — it's in a **dogfood-testing phase**: run it by hand, exactly as written, against real independent projects, and log what happens in `DOGFOOD-LOG.md`. See `METHODOLOGY.md` §15 for the full testing protocol; this file gives you the three concrete targets and the specific thing each one is meant to stress-test.

**Ground rules, non-negotiable, straight from the methodology itself:**
- Follow `METHODOLOGY.md` **in order**, section by section, as if you were a fresh agent with no other instructions. Don't skip ahead to "just create the issues" — the early sections (especially the new §1a below) gate what you're allowed to do later.
- **Log friction as you hit it**, not after. If a step in the doc is ambiguous, doesn't cover your situation, or requires a judgment call not written down anywhere — write that down in `DOGFOOD-LOG.md` immediately, then make a reasonable call and keep going. Don't silently paper over gaps.
- **Update `METHODOLOGY.md` itself** when you find something that should be fixed — a missing case, an unclear instruction, a wrong assumption. Leave the doc better than you found it, same as it asks of the projects it's applied to.
- Every entry in `DOGFOOD-LOG.md` gets dated, states the project type you landed on, and is honest about what broke — a log that only reports success isn't useful evidence.

---

## Target 1: the "OB" app (Obi / Socials) — tests the already-tracked path

**Repo:** `~/Workspace/socials`
**Linear state:** **already fully tracked.** Team "Off-brand", project "Obi" — roughly 15 milestones, 40+ issues (24+ retroactively backfilled as `Done`, the rest open backlog), issue labels (`iOS`/`Web`/`Backend` area + `Personal`/`Totem` track), a `Product` project label, 4 mirrored Documents (manifesto/inventory-audit/migration-roadmap/SCOPE-pointer), phase-blocking relations, one project status update.
**Project type:** `Product` (web + iOS).

**This is the test for `METHODOLOGY.md` §1a — the "already tracked" discovery path** — the newest and least-validated part of the methodology. Obi was chosen specifically *because* its Linear state is already fully known, which makes it possible to check your work: if you do this right, you should not create a single duplicate issue or milestone, and you should end up with a clear, explicit, yes/no-gated record of what you were and weren't authorized to touch.

**What "correct" looks like here:**
1. You detect the existing project via discovery (§1a step 1), not by being told about it in advance — actually search/ask, don't assume.
2. You enumerate and summarize what's there **before proposing any changes** (§1a step 2).
3. You ask the category-by-category yes/no questions in §1a step 3 **before writing anything** — and you actually wait for real answers, not assumed ones.
4. Whatever new work surfaces during this session gets tracked using the *existing* structure (extend, don't reorganize) unless the user explicitly asks for something else.
5. Zero duplicate issues, zero duplicate milestones, zero silently-overwritten existing data.

**What to log in `DOGFOOD-LOG.md`:** did §1a's steps actually produce the right caution in practice? Were the yes/no questions the right ones, or did you need to ask something §1a doesn't mention? Did detection actually work (could you find the project without being told), or did discovery fail silently?

---

## Target 2: Traces — fresh bootstrap, `Tool` type

**Repo:** **unknown — this is the first thing to resolve.** It was described as "already its own separate repo," but it is not present under `~/Workspace/` or anywhere else searched during this doc's preparation. **Ask the user for the repo path before doing anything else with this target.** Don't guess, don't search exhaustively on your own — this is exactly the kind of thing to just ask.
**Linear state:** not yet tracked in Linear (per the user, as of this doc being written).
**Project type:** `Tool` — described as a dev tool, single-surface expected (confirm actual platform(s) once you have the repo).

**This is a fresh-bootstrap test** — no existing Linear state to worry about, so §1a should resolve quickly to "nothing exists, proceed normally." The actual test here is everything *else* in the methodology working end-to-end on a real, independent project:

1. **§1b — North Star doc.** Does one exist for Traces? If not, this is a real test of the anchoring-questions fallback (§1, the 6 questions) — actually ask them, actually write the lightweight doc from the answers, don't skip this because it feels like overhead.
2. **§2 — Project type.** Confirm `Tool` is right, and specifically test the "platform-split labels are noise for a Tool" guidance — figure out Traces' actual internal seams (whatever they are) and use those as area labels instead of iOS/Web/Backend.
3. **§4 — retroactive backfill, using the concrete algorithm.** Traces is a real, presumably-already-partially-built tool — run the actual backfill algorithm (enumerate sources → extract by feature → only mark Done with evidence → file into milestones → cross-check for gaps) rather than starting purely from scratch. This is the second real test of that algorithm after Obi.
4. **§11 — manual-vs-API split.** Surface the checklist to the user *before* doing the automatable parts, same as the methodology prescribes.

**What to log:** did the anchoring questions actually produce a usable North Star doc quickly, or was it more friction than the doc implies? Did the Tool-type label guidance (module-based, not platform-based) actually make sense once you saw Traces' real structure, or did it need adjustment? How did the backfill algorithm perform on a second, different project — same quality of result as Obi, or did new edge cases show up?

---

## Target 3: "visual cursor" (unnamed, working title) — fresh bootstrap, `Tool` type, small-project edge case

**Repo:** **unknown — ask the user.** No name is finalized yet ("visual cursor" is a placeholder), and it wasn't locatable during this doc's preparation either. Same instruction as Target 2: ask, don't guess.
**Linear state:** not yet tracked.
**Project type:** `Tool`, dev tool.

**This target specifically stresses the small/early-stage judgment call in §1b** — "don't force a heavyweight doc-writing exercise on every trivial project" and "skip this step outright for genuinely small/disposable projects — use judgment, and say so to the user rather than silently deciding." An unnamed, presumably early-stage tool is exactly the case where that judgment call actually has to get made for real, not just described in the abstract.

1. **Make the actual call on North Star doc necessity**, and — critically — **say so to the user explicitly**, per the doc's own instruction. Don't silently decide either way.
2. Everything else proceeds the same as Target 2 (project type confirmation, backfill if there's anything to backfill yet, manual-vs-API checklist).
3. Because this project may be genuinely small, this is also a reasonable place to sanity-check §4's granularity question (feature-level vs. changelog-level) — does the methodology's default framing even make sense at this size, or does a small project need a third, lighter-weight option that doesn't exist yet in the doc?

**What to log:** what judgment call did you actually make on the North Star doc, and why? Did the user agree with it? Did the granularity question feel like the right thing to ask on a project this size, or was it friction for no reason?

---

## After all three: update the exit-criteria checklist

`METHODOLOGY.md` §15 defines "ready to package" as: every §14 open gap resolved-or-deliberately-deferred, plus 2–3 clean dogfood runs across genuinely different project types. After these three runs you'll have exactly that (one already-tracked `Product`, two fresh `Tool` bootstraps) — go back through §14 line by line and update each item's status based on what you actually learned, rather than leaving it as a stale checklist.

**Do not decide on packaging or distribution strategy** (§16) — that's explicitly held for the owner to decide separately, once this testing is done.
