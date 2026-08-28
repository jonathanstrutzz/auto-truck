import { describe, expect, it } from "vitest";
import { getStaticSectionId } from "../client/src/lib/staticNavigation";

describe("getStaticSectionId", () => {
  it("identifica hashes de seção como destinos da página inicial", () => {
    expect(getStaticSectionId("#galeria")).toBe("galeria");
    expect(getStaticSectionId("#pre-orcamento")).toBe("pre-orcamento");
  });

  it("preserva hashes de rota para o roteador estático", () => {
    expect(getStaticSectionId("#/portfolio")).toBeNull();
    expect(getStaticSectionId("")).toBeNull();
  });
});
