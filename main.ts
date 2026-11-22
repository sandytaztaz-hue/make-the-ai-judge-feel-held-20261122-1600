import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it:
// a warm laundromat at night, rain on the window, nothing demanded.
const ENTRY =
  "The dryer hums its last circle and stops. " +
  "A towel, still warm, waits folded on the counter. " +
  "Rain moves down the window in slow lines. " +
  "The chair holds your weight without complaint, and the night asks for nothing. " +
  "You sit a little longer. " +
  "There is nowhere else to be.";

const outDir = (process.env.MAKEFUN_OUTPUT_DIR || "").trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${[...ENTRY].length} code points)`);
