# Linear Methodology (a Claude Code skill)

**Teach your AI agent to track a project well — not just to call Linear's API.**

Existing Linear integrations solve the mechanics: creating issues, listing milestones, CRUD. That part is done — Claude Code's Linear MCP handles it. What's been missing is the *methodology*: how an agent should actually set up and maintain tracking so it stays trustworthy — anchoring every milestone and issue to the project's own North Star document, backfilling real shipped history instead of starting from a blank slate, wiring real dependencies, setting dates only when they mean something, and holding them accountable when they slip.

This skill is that methodology, extracted from a real production rollout and validated by running it end-to-end on three independent projects (an already-tracked product, and two fresh bootstraps — see [DOGFOOD-LOG.md](./DOGFOOD-LOG.md) for the honest evidence, including what broke).

## What it does

Given any repo, an agent following this methodology will:

- **Detect existing tracking first** — extending an in-use Linear project is a different, more careful operation than bootstrapping fresh, and the skill treats it that way (discovery → summary → explicit per-category confirmation before any write; zero duplicates).
- **Anchor to a North Star** — a manifesto, a README-as-vision, or a lightweight doc written from six anchoring questions. Structure is *derived* from it, never invented. The keystone question: *what are you actually trying to achieve by tracking this?* A launch goal and a "durable record" goal produce different structures — regardless of project size.
- **Backfill provable history** — mine the roadmap/CHANGELOG/git log and file shipped work as `Done` issues with evidence in every description, so the project's Linear reflects its real maturity from day one.
- **Wire real structure** — milestones 1:1 with the actual plan, separate tracks for engineering vs. launch readiness vs. rollout, `blockedBy`/`blocks` relations instead of tribal knowledge, module labels namespaced under label groups.
- **Install the discipline** — a tracking protocol written into the repo's `CLAUDE.md`, so every future agent session keeps Linear honest (lifecycle, search-before-create, close-the-loop-before-ending).
- **Hold dates accountable** — targets only with a real signal behind them, `atRisk` posted *before* a date slips, drift audits suggested at phase closes.

## Install

**npx (quickest):**

```bash
npx github:tjcages/linear-methodology-skill
```

**Or clone + symlink** (if you develop skills locally):

```bash
git clone https://github.com/tjcages/linear-methodology-skill ~/Workspace/linear-methodology-skill
ln -s ~/Workspace/linear-methodology-skill ~/.claude/skills/linear-methodology
```

Requires Claude Code with the **Linear MCP connector** authorized (`/mcp` in a session, or claude.ai connector settings).

## Use

In any repo, just ask:

> "Set up Linear tracking for this project."

Also triggers on: backfilling history into Linear, extending/auditing an already-tracked project, or reconciling tracking that's gone stale.

## Contents

- **[SKILL.md](./SKILL.md)** — the agent-facing operating order (what Claude loads).
- **[METHODOLOGY.md](./METHODOLOGY.md)** — the full methodology, 16 sections. The reference the skill points into.
- **[DOGFOOD-LOG.md](./DOGFOOD-LOG.md)** — evidence from the validation runs: what worked, what broke, what changed as a result.

## Origin

Built by doing it for real: a production app's full Linear rollout (15 milestones, 40+ issues, 24 backfilled from its own roadmap doc, mirrored documents, a strict per-session agent protocol) — then generalized, and dogfooded against independent projects until every open gap was resolved or deliberately deferred. The methodology fixes found during those runs are in the doc; the log shows the receipts.

## License

MIT
