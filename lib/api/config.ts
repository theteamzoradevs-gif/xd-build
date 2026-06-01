function normalizeBase(url: string | undefined): string {
  return url?.trim().replace(/\/$/, "") ?? "";
}

/**
 * xd-build-admin origin. Prefer CMS_API_BASE_URL on Vercel (runtime, no rebuild).
 * NEXT_PUBLIC_API_BASE_URL remains for local dev convenience.
 */
export function getApiBase(): string {
  return (
    normalizeBase(process.env.CMS_API_BASE_URL) ||
    normalizeBase(process.env.NEXT_PUBLIC_API_BASE_URL)
  );
}

export function apiUrl(path: string): string {
  const base = getApiBase();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function hasApiBase(): boolean {
  return getApiBase().length > 0;
}
