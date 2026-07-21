#!/usr/bin/env node
// Installs the linear-tracking skill pack into common Agent Skills directories.
// Prefer: npx skills add tjcages/linear-methodology-skill -g -a '*' -y

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const pkgRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const skillsSrc = join(pkgRoot, "skills");

const DEST_ROOTS = [
  join(homedir(), ".claude", "skills"),
  join(homedir(), ".cursor", "skills"),
  join(homedir(), ".codex", "skills"),
  join(homedir(), ".agents", "skills"),
];

const SKILL_NAMES = readdirSync(skillsSrc).filter((name) =>
  existsSync(join(skillsSrc, name, "SKILL.md")),
);

if (SKILL_NAMES.length === 0) {
  console.error("✗ No skills/*/SKILL.md found — corrupt package.");
  process.exit(1);
}

function installSkill(root, skillName) {
  const src = join(skillsSrc, skillName);
  const dest = join(root, skillName);
  if (existsSync(dest)) {
    if (!existsSync(join(dest, "SKILL.md"))) {
      console.error(`✗ ${dest} exists but has no SKILL.md — skipping.`);
      return false;
    }
    rmSync(dest, { recursive: true });
  }
  mkdirSync(root, { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`✓ ${dest}`);
  return true;
}

let ok = 0;
for (const root of DEST_ROOTS) {
  mkdirSync(root, { recursive: true });
  for (const name of SKILL_NAMES) {
    if (installSkill(root, name)) ok += 1;
  }
}

if (ok === 0) {
  console.error("✗ No installs completed.");
  process.exit(1);
}

const version = JSON.parse(readFileSync(join(pkgRoot, "package.json"), "utf8")).version;
console.log(`\n✓ linear-tracking pack ${version} → ${ok} skill installs across ${DEST_ROOTS.length} roots`);
console.log(`  Skills: ${SKILL_NAMES.join(", ")}`);
console.log(`\nNext (required — ~5 min):`);
console.log(`1. Paste always-on snippet from INSTALL.md into your agent rules`);
console.log(`2. Authorize Linear MCP (shared/AUTH.md)`);
console.log(`3. Create Monitor Automation (shared/AUTOMATION.md via /automate)`);
console.log(`\nPrefer managed installs: npx skills add tjcages/linear-methodology-skill -g -a '*' -y`);
