import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const staticOutput = resolve(projectRoot, "out");
const sitesOutput = resolve(projectRoot, "dist");
const workerSource = resolve(projectRoot, "scripts/sites-worker.mjs");

rmSync(sitesOutput, { force: true, recursive: true });
mkdirSync(sitesOutput, { recursive: true });
cpSync(staticOutput, sitesOutput, { recursive: true });
mkdirSync(resolve(sitesOutput, "server"), { recursive: true });
cpSync(workerSource, resolve(sitesOutput, "server/index.js"));
