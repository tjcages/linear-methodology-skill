# User journey — Linear tracking skill pack

Locked decisions: **1B** soft nudge · **2C** Monitor Automation required.

## One-paste path (stranger → ready)

1. Run `npx skills add tjcages/linear-methodology-skill -g -a '*' -y`
2. In Agent chat: `finish linear-tracking install`  
   → writes always-on (Cursor User Rule + file snippets), probes Linear auth, opens [Automations](https://cursor.com/automations)
3. Complete any prompted OAuth / save the Monitor Automation

`npx github:…` installer also auto-writes always-on into Claude/Codex `CLAUDE.md` / `AGENTS.md`. Cursor User Rules require Step 2 (app API, not the CLI).

Install is **incomplete** until always-on + Linear auth + Monitor Automation are done.

## Skills

| Skill | When |
|-------|------|
| `linear-discipline` | Always-on (via user-rule snippet). Close the loop; soft-nudge untracked repos once. |
| `linear-setup` | User says yes to nudge, or “set up Linear tracking”. Full bootstrap. |
| `linear-sync` | “Sync / audit / reconcile Linear”. Rescue messy or stale boards. |
| `linear-monitor` | `/linear-monitor`, health check, or the weekly Automation. |

Chat to the user follows [RESPONSE.md](./shared/RESPONSE.md). Ticket prose stays terse (methodology §4).

## Flow

```
paste install → always-on snippet → Linear auth → Monitor Automation
       ↓
open repo → protocol present? → yes → discipline (file issues, close loop)
                       ↓ no
              skip file present? → yes → quiet
                       ↓ no
              ask once: set up Linear? (~10–20 min)
                       ↓ yes → linear-setup
                       ↓ no  → write .linear-tracking-skip
```

## Edge-case matrix

| Case | Behavior |
|------|----------|
| No Linear MCP / unauthorized | Stop. ≤5 numbered auth steps for this agent. Never invent GraphQL/scripts. |
| Wrong workspace | Ask which team/workspace before writes. Search before create. |
| Already tracked | §1a: enumerate → summarize → per-category yes/no. Never silent reorganize. |
| Multi-repo → one Linear project | Protocol names the shared project; nudge only if no protocol in *this* repo. |
| Private / missing README | North Star: ask the 6 questions or use best available doc; say the call out loud. |
| User declines nudge | Write `.linear-tracking-skip` at repo root. Do not ask again. |
| Automation without Linear tool | Auth Step 0 inside monitor; fail with auth steps. |
| Concurrent agents | Search-before-create; close-the-loop each session. |
| Eve / PromptScript (no global install) | Project-level `npx skills add` or symlink; note in INSTALL. |
| Skills installed, no always-on snippet | Discipline never loads. INSTALL verify fails until snippet is pasted. |
| Monitor noise | §20: status updates only on health/milestone signals. Default Automation = read + comment, no mass creates. |
| User asks one-off CRUD | Linear MCP directly — not these skills. |

## Verify (install complete)

- [ ] Four skills listed: `npx skills list -g` shows setup/sync/monitor/discipline
- [ ] Always-on snippet present in the agent’s persistent rules
- [ ] Linear MCP responds (e.g. list teams)
- [ ] Monitor Automation exists (Cursor Automations UI)
- [ ] Opening an untracked repo produces at most one nudge

## Version

Journey ships in **v1.2.0**. See [CHANGELOG.md](./CHANGELOG.md).
