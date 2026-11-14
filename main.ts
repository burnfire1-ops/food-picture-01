import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const here = dirname(fileURLToPath(import.meta.url));
// The copy is byte-for-byte so the picture that reaches the judge is
// exactly the picture that was verified: no re-encoding, no quality loss.
copyFileSync(join(here, "entry.png"), join(outputDir, "entry.png"));
