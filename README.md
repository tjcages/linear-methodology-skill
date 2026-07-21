# Linear Methodology (Agent Skills pack)

**Teach your AI agent to track a project well — not just to call Linear's API.**

One paste → skills on every agent → always-on discipline → soft nudge for untracked repos → required weekly Monitor Automation. ADHD-shaped Linear chat (action first, no preamble).

Works on [Agent Skills](https://agentskills.io) harnesses (Cursor, Claude Code, Codex, …). Evidence: [DOGFOOD-LOG.md](./DOGFOOD-LOG.md). Journey: [JOURNEY.md](./JOURNEY.md).

## Install

```bash
npx skills add tjcages/linear-methodology-skill -g -a '*' -y
```

Then finish [INSTALL.md](./INSTALL.md) (always-on snippet → Linear auth → Monitor Automation). **Install is incomplete until those three are done.**

## Skills

| Skill | Job |
|-------|-----|
| `linear-discipline` | Always-on protocol + one-time setup nudge |
| `linear-setup` | Bootstrap / extend tracking |
| `linear-sync` | Audit / rescue existing boards |
| `linear-monitor` | Health check + Automation recipe |

## Use

> "Set up Linear tracking for this project."

Also: sync/audit, health check, or just work in a tracked repo (discipline closes the loop).

## Contents

- [INSTALL.md](./INSTALL.md) — per-agent install, verify, uninstall
- [JOURNEY.md](./JOURNEY.md) — path + edge cases
- [shared/](./shared/) — RESPONSE, AUTH, AUTOMATION, METHODOLOGY, EXAMPLES
- [skills/](./skills/) — setup / sync / monitor / discipline (+ legacy alias)
- [CHANGELOG.md](./CHANGELOG.md) · [DOGFOOD-LOG.md](./DOGFOOD-LOG.md)

## License

MIT
