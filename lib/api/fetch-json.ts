import { apiUrl, hasApiBase } from "./config";

const defaultCacheInit: RequestInit =
  process.env.NODE_ENV === "development"
    ? { cache: "no-store" }
    : { next: { revalidate: 60 } };

export async function fetchJson<T>(
  path: string,
  init?: RequestInit & { next?: { revalidate?: number } },
): Promise<T> {
  if (!hasApiBase()) {
    throw new Error(
      "CMS_API_BASE_URL (or NEXT_PUBLIC_API_BASE_URL) is not set. Point it at the deployed xd-build-admin origin.",
    );
  }

  const url = apiUrl(path);
  const res = await fetch(url, {
    ...defaultCacheInit,
    ...init,
    headers: { Accept: "application/json", ...init?.headers },
  });
  const data = (await res.json()) as T & { error?: string };
  if (!res.ok) {
    const detail =
      typeof data.error === "string" ? data.error : `API ${res.status}`;
    const hint =
      process.env.NODE_ENV === "development" ? ` (${url})` : "";
    throw new Error(`${detail}${hint}`);
  }
  return data;
}
