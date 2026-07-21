#!/usr/bin/env node
// Installs the linear-methodology skill into common Agent Skills directories
// (Claude Code, Cursor, Codex, universal .agents). Prefer the skills CLI for
// multi-agent installs: npx skills add tjcages/linear-methodology-skill -g -a '*' -y
// Usage: npx github:tjcages/linear-methodology-skill  (or `npx linear-methodology-skill` once on npm)

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const pkgRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const skillName = "linear-methodology";

const DEST_ROOTS = [
  join(homedir(), ".claude", "skills"),
  join(homedir(), ".cursor", "skills"),
  join(homedir(), ".codex", "skills"),
  join(homedir(), ".agents", "skills"),
];

const FILES = [
  ["skills/linear-methodology/SKILL.md", "SKILL.md"],
  ["skills/linear-methodology/METHODOLOGY.md", "METHODOLOGY.md"],
  ["skills/linear-methodology/EXAMPLES.md", "EXAMPLES.md"],
  ["README.md", "README.md"],
  ["LICENSE", "LICENSE"],
];

for (const [src] of FILES) {
  if (!existsSync(join(pkgRoot, src))) {
    console.error(`✗ ${src} missing from package — corrupt install, aborting.`);
    process.exit(1);
  }
}

function installTo(dest) {
  if (existsSync(dest)) {
    const prev = join(dest, "SKILL.md");
    if (!existsSync(prev)) {
      console.error(`✗ ${dest} exists but doesn't look like this skill (no SKILL.md) — not touching it.`);
      return false;
    }
    rmSync(dest, { recursive: true });
    console.log(`↻ Replacing existing install at ${dest}`);
  }

  mkdirSync(dest, { recursive: true });
  for (const [src, name] of FILES) cpSync(join(pkgRoot, src), join(dest, name));
  console.log(`✓ ${dest}`);
  return true;
}

let ok = 0;
for (const root of DEST_ROOTS) {
  mkdirSync(root, { recursive: true });
  if (installTo(join(root, skillName))) ok += 1;
}

if (ok === 0) {
  console.error("✗ No installs completed.");
  process.exit(1);
}

const version = JSON.parse(readFileSync(join(pkgRoot, "package.json"), "utf8")).version;
console.log(`\n✓ linear-methodology ${version} installed → ${ok}/${DEST_ROOTS.length} agent skill dirs`);
console.log(`\nNext: say "set up Linear tracking for this project" in Cursor, Claude Code, or Codex.`);
console.log(`Requires the Linear MCP connector authorized in that agent.`);
console.log(`For managed multi-agent installs prefer: npx skills add tjcages/linear-methodology-skill -g -a '*' -y`);
