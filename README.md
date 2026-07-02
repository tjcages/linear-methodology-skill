# Linear Tracking Methodology

**Status: pre-packaging, dogfood-testing phase.** Not yet a distributable Claude Code skill — this repo currently holds the methodology draft and the evidence log from testing it on real projects. Distribution/packaging strategy is deliberately not decided yet.

## What this is

A methodology — not a mechanics wrapper — for how an AI agent (or a human) should set up and maintain project tracking in [Linear](https://linear.app), built by doing it for real on a production app ([Obi](https://github.com/tjcages/socials)) and then generalized.

Existing Linear-integration skills teach *how to call Linear's API*. That's solved — Claude Code's own Linear MCP handles it. What's missing from the ecosystem is *how to track a project well*: anchoring every phase, milestone, and issue to a real North Star document instead of inventing tracking structure from nothing, backfilling real project history instead of starting from a blank slate, and holding realistic release dates accountable instead of letting them drift silently.

## Contents

- **[METHODOLOGY.md](./METHODOLOGY.md)** — the full methodology, 16 sections. Start here.
- **[DOGFOOD-LOG.md](./DOGFOOD-LOG.md)** — evidence from testing the methodology on real, independent projects. Updated after every test run.

## Who this is for

Someone running many concurrent projects who wants each one properly tracked in Linear without personally redesigning the tracking scheme every time, and without that tracking decaying into busywork disconnected from why the project exists.

## Origin

Built while setting up Linear tracking for [Obi](https://github.com/tjcages/socials) (a personal content-calendar app) in July 2026 — 15 milestones, 36+ issues, 4 mirrored Documents, and a strict agent-facing tracking discipline, all derived from that project's own manifesto/roadmap docs. The methodology in this repo is that process, generalized and validated against other independent projects before being considered for wider distribution.
