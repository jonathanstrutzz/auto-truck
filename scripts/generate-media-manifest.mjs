import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const sourceRoot = resolve("client");
const supportedExtensions = new Set([".tsx", ".ts", ".html", ".css"]);

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

const files = await walk(sourceRoot);
const paths = new Set();

for (const file of files) {
  if (!supportedExtensions.has(file.slice(file.lastIndexOf(".")))) continue;
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/\/manus-storage\/([^"'`\s]+)/g)) {
    paths.add(match[1].replace(/[.,;:]+$/, ""));
  }
}

console.log("# Manifesto de mídias para GitHub Pages\n");
console.log("Faça upload destes arquivos para uma fonte pública e defina VITE_MEDIA_BASE_URL com o endereço base, sem barra no final.\n");
for (const path of [...paths].sort()) console.log(`- ${path}`);
