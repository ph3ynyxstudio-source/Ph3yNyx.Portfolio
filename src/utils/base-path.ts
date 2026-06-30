const normalizedBaseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const withBase = (path = "") =>
  path ? `${normalizedBaseUrl}${path.replace(/^\/+/, "")}` : normalizedBaseUrl;

export const assetPath = withBase;
