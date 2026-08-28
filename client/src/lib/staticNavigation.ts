export function getStaticSectionId(hash: string): string | null {
  if (!hash.startsWith("#") || hash.startsWith("#/")) return null;

  const encodedId = hash.slice(1);
  if (!encodedId) return null;

  try {
    return decodeURIComponent(encodedId);
  } catch {
    return encodedId;
  }
}
