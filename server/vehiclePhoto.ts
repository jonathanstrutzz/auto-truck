import { storagePut } from "./storage";

export const MAX_VEHICLE_PHOTO_BYTES = 6 * 1024 * 1024;

const SUPPORTED_MIME_TYPES = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

export function parseVehiclePhotoDataUrl(dataUrl: string) {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=\s]+)$/i.exec(dataUrl);
  if (!match) throw new Error("Formato de imagem não suportado. Envie JPG, PNG ou WebP.");

  const contentType = match[1].toLowerCase();
  const extension = SUPPORTED_MIME_TYPES.get(contentType);
  if (!extension) throw new Error("Formato de imagem não suportado.");

  const bytes = Buffer.from(match[2].replace(/\s/g, ""), "base64");
  if (bytes.length === 0) throw new Error("Não foi possível ler a imagem enviada.");
  if (bytes.length > MAX_VEHICLE_PHOTO_BYTES) throw new Error("A imagem deve ter no máximo 6 MB.");

  return { bytes, contentType, extension };
}

export async function uploadVehiclePhoto(dataUrl: string) {
  const { bytes, contentType, extension } = parseVehiclePhotoDataUrl(dataUrl);
  const key = `pre-orcamentos/veiculos/${crypto.randomUUID()}.${extension}`;
  return storagePut(key, bytes, contentType);
}
