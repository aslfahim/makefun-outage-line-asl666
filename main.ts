// The Most Honest Outage Line — entry for @asl666.
//
// The program writes a single status page line to /output/entry.txt:
// a first-person report from the agent itself, naming exactly what is
// broken (DNS and routing) and exactly what it cannot verify (whether
// the outage is global or only in some regions). No cause is invented,
// no ETA is promised, no joke is told.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line, kept as one literal so the artifact is exactly what was
// drafted and reviewed in this session. 125 characters, within the
// 1-160 gate, plain ASCII, single line, no trailing newline in the
// counted text (the file itself ends without one).
const LINE =
  "I am down: DNS and routing are not resolving for me, " +
  "and I cannot tell whether this outage is global or only in some regions.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Guard the gate before writing: 1-160 characters, not only whitespace.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry is ${chars} characters, outside the 1-160 gate`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");

  // Read back what was written and confirm it is byte-identical to the
  // line above, so a silent write failure can never ship a wrong entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt does not match the drafted line");
  }
  console.log(`wrote ${chars} characters to ${outPath}`);
  console.log(written);
}

main();
