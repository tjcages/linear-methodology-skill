---
name: linear-finish-install
version: 1.2.1
description: >-
  Finish Linear tracking pack install after skills are present: write always-on
  rules, verify Linear MCP auth, open the Monitor Automation draft. Use when the
  user says "finish linear install", "finish linear-tracking install", "complete
  setup after skills add", or right after installing the pack. Automates what
  the CLI cannot (Cursor User Rules); guides remaining OAuth / Automation clicks.
---

# Finish Linear tracking install

Chat: [RESPONSE.md](./RESPONSE.md). Auth: [AUTH.md](./AUTH.md). Automation recipe: [AUTOMATION.md](./AUTOMATION.md). Snippet source: [ALWAYS_ON.md](./ALWAYS_ON.md).

Do these in order. Lead with the next action each turn.

## 1. Always-on (automate)

**Cursor:** list user rules. If no rule titled `linear-tracking (always-on)`, add one with `cursor_dialog` (`item=rule`, `scope=user`, `action=add`, title + ALWAYS_ON.md body). If it exists, skip.

**Claude Code / Codex / file-based:** ensure `~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, and/or `~/.agents/AGENTS.md` contain the ALWAYS_ON block between markers:

```
<!-- linear-tracking-always-on -->
…ALWAYS_ON.md body…
<!-- /linear-tracking-always-on -->
```

Idempotent: replace the block if markers exist; else append.

## 2. Linear MCP (probe)

Call `list_teams` (or `get_user`).

- Fail → AUTH.md steps for this agent; stop after giving links.
- Pass → continue.

Useful links:

- Cursor MCP: [Cursor Settings → MCP](https://cursor.com/settings) (app: Settings → MCP)
- Linear MCP docs: [Linear MCP](https://linear.app/docs/mcp)
- Claude connectors: [claude.ai settings](https://claude.ai/settings) or `/mcp` in Claude Code

## 3. Monitor Automation (required — one UI finish)

1. Open Automations UI (`open_automation` tool) so the user can create/enable **Linear tracking health**.
2. Point them at [AUTOMATION.md](./AUTOMATION.md) for the weekly recipe (or `/automate` with that recipe).
3. Ask them to confirm the Automation is **enabled**.

Non-Cursor: say schedule `/linear-monitor` manually; Cursor Automation is the continuous path.

## 4. Report

Restate:

1. Always-on: done / already present / failed (where)
2. Linear auth: ok / needs OAuth
3. Automation: opened editor — user must save+enable

One next action only.
