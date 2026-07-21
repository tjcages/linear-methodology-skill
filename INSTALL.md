# Install — Linear tracking skill pack

One pack. Cursor, Claude Code, Codex, and Agent Skills harnesses.

Journey: [JOURNEY.md](./JOURNEY.md). Locked: soft nudge (1B) · Monitor Automation required (2C).

## Install (all agents)

```bash
npx skills add tjcages/linear-methodology-skill -g -a '*' -y
```

Targeted:

```bash
npx skills add tjcages/linear-methodology-skill -g -a cursor -a claude-code -a codex -y
```

Or: `npx github:tjcages/linear-methodology-skill` (copies into common skill dirs).

## Always-on snippet (required)

Paste into the agent’s persistent rules. Without this, `linear-discipline` will not load every session.

**Cursor** — Settings → Rules → User Rules (or a user rule with always-apply):

```markdown
## Linear tracking

Follow the `linear-discipline` skill every session: if this repo has a Linear tracking protocol, enforce it (search-before-create, lifecycle, close the loop). If it does not and `.linear-tracking-skip` is absent, ask once to run linear-setup. Linear chat follows the pack’s RESPONSE.md (action-first, numbered steps, no preamble). Authorize Linear MCP before any Linear calls (AUTH.md).
```

**Claude Code** — add the same block to `~/.claude/CLAUDE.md`.

**Codex** — add the same block to `~/.codex/AGENTS.md` or `~/.agents/AGENTS.md`.

## Authorize Linear MCP (required)

See [shared/AUTH.md](./shared/AUTH.md). Probe must succeed before setup/sync/monitor.

## Create Monitor Automation (required — 2C)

Install is incomplete until this exists.

1. Open Cursor Agent chat.
2. Run `/automate` (create a Cursor Automation).
3. Use the recipe in [shared/AUTOMATION.md](./shared/AUTOMATION.md).
4. Confirm it appears enabled in Automations.

Non-Cursor: schedule `/linear-monitor` yourself; Cursor Automation is the required continuous path.

## Verify

```bash
npx skills list -g
```

Confirm: `linear-setup`, `linear-sync`, `linear-monitor`, `linear-discipline` (and optional alias `linear-methodology`).

Checklist:

1. Always-on snippet pasted
2. Linear MCP lists teams
3. Monitor Automation enabled
4. Untracked repo → at most one nudge

## Update

```bash
npx skills update -g
```

## Uninstall

```bash
npx skills remove linear-setup linear-sync linear-monitor linear-discipline linear-methodology -g -y
```

Remove the always-on snippet and disable the Automation.

## Claude Code plugin (optional)

```
/plugin marketplace add tjcages/linear-methodology-skill
/plugin install linear-methodology@linear-methodology-skill
```

Still complete always-on + auth + Automation.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| No soft nudge | Paste always-on snippet; new chat |
| Auth errors | AUTH.md for your agent; new chat after OAuth |
| Automation missing | AUTOMATION.md + `/automate` |
| Old single skill only | Re-run `skills add -g -a '*' -y` for the full pack |
| Eve / PromptScript | No global install — use project-level `npx skills add` without `-g` |
