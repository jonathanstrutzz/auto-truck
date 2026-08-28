import { createWriteStream } from "node:fs";
import { copyFile, mkdir, readdir, readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const sourceRoot = resolve("client");
const outputRoot = resolve("/tmp/auto-truck-media-source/public-media");
const localFallbackRoot = resolve("/home/ubuntu/webdev-static-assets");
const storageBase = (process.env.MANUS_STORAGE_BASE ?? "https://3000-im3141kev7o5k8gn105md-0abc7b2a.us3.manus.computer/manus-storage").replace(/\/+$/, "");
const supportedExtensions = new Set([".tsx", ".ts", ".html", ".css"]);
const skippedFiles = [
  /^IMG_.*\.MOV$/i,
  /^auto-truck-volkswagen-chegada-unidade-4k_/i,
  /^auto-truck-delivery-finalizacao-4k_/i,
];

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
const mediaPaths = new Set();

for (const file of files) {
  if (!supportedExtensions.has(file.slice(file.lastIndexOf(".")))) continue;
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/\/manus-storage\/([^"'`\s]+)/g)) {
    const name = match[1].replace(/[.,;:]+$/, "");
    if (!skippedFiles.some((pattern) => pattern.test(name))) mediaPaths.add(name);
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const name of [...mediaPaths].sort()) {
  const outputPath = resolve(outputRoot, name);
  try {
    await copyFile(resolve(localFallbackRoot, name), outputPath, 0);
    console.log(`Copiado do fallback local: ${name}`);
    continue;
  } catch {
    // Os arquivos regulares permanecem disponíveis pelo armazenamento do projeto.
  }

  const url = `${storageBase}/${name}`;
  const response = await fetch(url);
  if (!response.ok || !response.body) throw new Error(`Falha ao baixar ${name}: HTTP ${response.status}`);
  await pipeline(Readable.fromWeb(response.body), createWriteStream(outputPath));
  console.log(`Baixado: ${name}`);
}

console.log(`\nMídias públicas preparadas: ${mediaPaths.size}`);
