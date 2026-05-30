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
      "NEXT_PUBLIC_API_BASE_URL is not set. Point it at the xd-build-admin dev server.",
    );
  }

  const res = await fetch(apiUrl(path), {
    ...defaultCacheInit,
    ...init,
    headers: { Accept: "application/json", ...init?.headers },
  });
  const data = (await res.json()) as T & { error?: string };
  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : `API ${res.status}`,
    );
  }
  return data;
}
