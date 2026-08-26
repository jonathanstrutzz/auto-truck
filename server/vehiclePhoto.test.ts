import { describe, expect, it } from "vitest";
import { MAX_VEHICLE_PHOTO_BYTES, parseVehiclePhotoDataUrl } from "./vehiclePhoto";

describe("parseVehiclePhotoDataUrl", () => {
  it("accepts a supported image and keeps its content type", () => {
    const image = parseVehiclePhotoDataUrl("data:image/jpeg;base64,aGVsbG8=");

    expect(image.contentType).toBe("image/jpeg");
    expect(image.extension).toBe("jpg");
    expect(image.bytes.toString()).toBe("hello");
  });

  it("rejects unsupported image formats and oversized payloads", () => {
    expect(() => parseVehiclePhotoDataUrl("data:image/gif;base64,aGVsbG8=")).toThrow("Formato de imagem não suportado");
    const oversized = Buffer.alloc(MAX_VEHICLE_PHOTO_BYTES + 1).toString("base64");
    expect(() => parseVehiclePhotoDataUrl(`data:image/png;base64,${oversized}`)).toThrow("no máximo 6 MB");
  });
});
