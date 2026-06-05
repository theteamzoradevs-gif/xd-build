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

  const text = await res.text();
  let data: T & { error?: string };

  try {
    data = text ? (JSON.parse(text) as T & { error?: string }) : ({} as T & { error?: string });
  } catch {
    const snippet = text.trimStart().slice(0, 40).toLowerCase();
    const isHtml =
      snippet.startsWith("<!doctype") || snippet.startsWith("<html");
    const devHint =
      process.env.NODE_ENV === "development" ? ` (${url})` : "";
    throw new Error(
      isHtml
        ? `CMS API returned HTML instead of JSON (${res.status}). Set CMS_API_BASE_URL to xd-build-admin (e.g. https://xd-build-admin.vercel.app), not this marketing site.${devHint}`
        : `Invalid JSON from CMS API (${res.status}).${devHint}`,
    );
  }

  if (!res.ok) {
    const detail =
      typeof data.error === "string" ? data.error : `API ${res.status}`;
    const hint =
      process.env.NODE_ENV === "development" ? ` (${url})` : "";
    throw new Error(`${detail}${hint}`);
  }

  return data;
}
