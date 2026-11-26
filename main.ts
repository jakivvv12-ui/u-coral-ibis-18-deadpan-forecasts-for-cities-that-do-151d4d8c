import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "Port Sable: 14°C, light rain until noon, then the harbor fog files a formal complaint and stays for dinner.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
