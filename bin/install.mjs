#!/usr/bin/env node
// Installs the linear-methodology skill into ~/.claude/skills/linear-methodology
// Usage: npx github:tjcages/linear-methodology-skill  (or `npx linear-methodology-skill` once on npm)

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const pkgRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const dest = join(homedir(), ".claude", "skills", "linear-methodology");

const FILES = [
  ["skills/linear-methodology/SKILL.md", "SKILL.md"],
  ["skills/linear-methodology/METHODOLOGY.md", "METHODOLOGY.md"],
  ["README.md", "README.md"],
  ["LICENSE", "LICENSE"],
];

for (const [src] of FILES) {
  if (!existsSync(join(pkgRoot, src))) {
    console.error(`✗ ${src} missing from package — corrupt install, aborting.`);
    process.exit(1);
  }
}

if (existsSync(dest)) {
  const prev = join(dest, "SKILL.md");
  if (!existsSync(prev)) {
    console.error(`✗ ${dest} exists but doesn't look like this skill (no SKILL.md) — not touching it.`);
    process.exit(1);
  }
  rmSync(dest, { recursive: true });
  console.log(`↻ Replacing existing install at ${dest}`);
}

mkdirSync(dest, { recursive: true });
for (const [src, name] of FILES) cpSync(join(pkgRoot, src), join(dest, name));

const version = JSON.parse(readFileSync(join(pkgRoot, "package.json"), "utf8")).version;
console.log(`✓ linear-methodology ${version} installed → ${dest}`);
console.log(`\nNext: in any Claude Code session, say "set up Linear tracking for this project".`);
console.log(`Requires the Linear MCP connector (authorize via /mcp or claude.ai connector settings).`);
