import { NextResponse } from "next/server";
import { apiUrl, hasApiBase } from "@/lib/api/config";

/** Proxies public contact submissions to xd-build-admin (server-side CMS_API_BASE_URL). */
export async function POST(request: Request) {
  if (!hasApiBase()) {
    return NextResponse.json(
      { error: "CMS is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const res = await fetch(apiUrl("/api/enquiries"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
