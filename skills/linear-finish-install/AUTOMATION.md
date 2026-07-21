# Required Monitor Automation (2C)

Install is **incomplete** until this Cursor Automation exists. Non-Cursor agents: run `/linear-monitor` manually on a schedule until their harness supports an equivalent.

## Plain-language recipe (feed to `/automate`)

| Field | Value |
|-------|--------|
| **Name** | Linear tracking health |
| **Description** | Weekly health check for Linear projects using linear-monitor |
| **Trigger** | Schedule — weekly (pick a quiet weekday morning) |
| **Tools** | Linear MCP |
| **Instructions** | See prompt below |
| **Write policy** | Default: **read + comment on existing issues only**. No mass issue creation. Status updates only on real health signals (§20). |

## Automation prompt (paste as instructions)

```
You are running the linear-monitor skill for a scheduled health check.

1. Step 0: confirm Linear MCP auth (AUTH.md). If unauthorized, stop with auth steps — do not invent API calls.
2. Follow RESPONSE.md for any user-visible output (action-first, ≤5 bullets).
3. Scope: team/workspace the user configured, or all teams you can list if unset.
4. Checks (read-only first):
   - Milestones with target dates approaching where open issues are not trending Done → note atRisk candidates
   - Issues In Progress with no comment for >7 days → list them
   - Issues with no milestone (orphans) → list them
   - Do not post status updates unless health actually changed (onTrack↔atRisk↔offTrack)
5. Writes (only if explicitly enabled in this Automation): comment on existing issues with findings; never create a spray of new issues.
6. Output: ADHD-shaped digest — findings first, then ONE next action for the human.
7. Never soft-nudge untracked git repos from an Automation run.
```

## How to create it

1. In Cursor Agent chat, invoke `/automate` (or “create a Cursor Automation”).
2. Paste the table + prompt above when asked for intent.
3. Approve the draft table; finish in the Automations editor (schedule + Linear tool).
4. Confirm the Automation appears in Automations UI.

## Verify

- Automation named **Linear tracking health** (or equivalent) exists and is enabled.
- Next run date is set.
- Linear tool is attached.
