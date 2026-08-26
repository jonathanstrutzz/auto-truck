import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve("dist/github-pages");
const mediaBaseUrl = process.env.VITE_MEDIA_BASE_URL?.replace(/\/+$/, "");
const textExtensions = new Set([".html", ".js", ".css", ".json"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await walk(path));
    else paths.push(path);
  }
  return paths;
}

if (!mediaBaseUrl) {
  console.warn("[GitHub Pages] VITE_MEDIA_BASE_URL não definida. Os caminhos /manus-storage/ foram preservados para configuração posterior.");
  if (process.env.CI === "true") {
    console.error("[GitHub Pages] Defina a variável MEDIA_BASE_URL no repositório antes de publicar.");
    process.exit(1);
  }
  process.exit(0);
}

const files = await walk(outputDir);
const replacement = `${mediaBaseUrl}/`;
let changedFiles = 0;

for (const file of files) {
  if (!textExtensions.has(file.slice(file.lastIndexOf(".")))) continue;
  const source = await readFile(file, "utf8");
  const updated = source.replaceAll("/manus-storage/", replacement);
  if (updated !== source) {
    await writeFile(file, updated, "utf8");
    changedFiles += 1;
  }
}

console.log(`[GitHub Pages] ${changedFiles} arquivo(s) atualizado(s) para usar ${mediaBaseUrl}.`);
