// news-summary-01 entry: writes summary.txt to /output/entry.txt.
// Node 22, standard library only, no network, deterministic: the same
// bytes are written on every run.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const summary = readFileSync(join(here, "summary.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), summary, "utf8");
