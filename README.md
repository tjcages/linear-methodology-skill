# Linear Methodology (an Agent Skill)

**Teach your AI agent to track a project well — not just to call Linear's API.**

The Linear MCP already handles the mechanics (issues, milestones, CRUD). This skill adds what's missing: the methodology. Structure derived from the project's own North Star doc, real shipped history backfilled with evidence, real dependencies wired, dates that mean something.

Works anywhere that speaks [Agent Skills](https://agentskills.io) — Cursor, Claude Code, Codex, and other compatible agents. Extracted from a production rollout, then validated across five real runs — see [DOGFOOD-LOG.md](./DOGFOOD-LOG.md) for what worked and what broke.

## What it does

- **Detects existing tracking first** — extending a live project is a careful, confirmed operation; bootstrapping fresh is fast. Never duplicates.
- **Anchors to a North Star** — a manifesto or README-as-vision; structure is derived, never invented. The keystone question: *why are you tracking this?* A launch goal and a "durable record" produce different structures.
- **Backfills provable history** — roadmap/CHANGELOG/git log → `Done` issues with evidence, so Linear reflects real maturity from day one.
- **Wires real structure** — milestones 1:1 with the plan, separate engineering/launch/rollout tracks, `blockedBy` relations, label groups.
- **Installs the discipline** — a tracking protocol in the repo's always-loaded agent instructions (`CLAUDE.md`, `AGENTS.md`, or `.cursor/rules/`) keeps every future session honest.
- **Holds dates accountable** — targets only with a real signal; `atRisk` posted *before* a date slips.

## Install

**Recommended — skills CLI** ([skills.sh](https://www.skills.sh)), all agents:

```bash
npx skills add tjcages/linear-methodology-skill -g -a '*' -y
```

Target specific agents:

```bash
npx skills add tjcages/linear-methodology-skill -g -a cursor -a claude-code -a codex -y
```

**npx (copies into common skill dirs):**

```bash
npx github:tjcages/linear-methodology-skill
```

**Or as a Claude Code plugin** (auto-updates via `/plugin marketplace update`):

```
/plugin marketplace add tjcages/linear-methodology-skill
/plugin install linear-methodology@linear-methodology-skill
```

**Or clone + symlink** (always fresh via git pull):

```bash
git clone https://github.com/tjcages/linear-methodology-skill
SKILL_SRC="$(pwd)/linear-methodology-skill/skills/linear-methodology"
ln -s "$SKILL_SRC" ~/.cursor/skills/linear-methodology
ln -s "$SKILL_SRC" ~/.claude/skills/linear-methodology
ln -s "$SKILL_SRC" ~/.codex/skills/linear-methodology
ln -s "$SKILL_SRC" ~/.agents/skills/linear-methodology
```

Requires the Linear MCP connector authorized in whichever agent you use.

## Use

> "Set up Linear tracking for this project."

Also: backfilling history, extending an already-tracked project, reconciling stale tracking.

## Contents

- [SKILL.md](./skills/linear-methodology/SKILL.md) — the agent-facing operating order
- [METHODOLOGY.md](./skills/linear-methodology/METHODOLOGY.md) — the full methodology (26 sections; §17–§26 are the v1.1 operationalization round-out)
- [EXAMPLES.md](./skills/linear-methodology/EXAMPLES.md) — before/after transformations, incl. a messy project fixed step by step
- [DOGFOOD-LOG.md](./DOGFOOD-LOG.md) — validation evidence
- [CHANGELOG.md](./CHANGELOG.md) — methodology version history

## License

MIT
