/** Visitor-safe message; keep Mongo/API details in server logs only. */
export const PUBLIC_LOAD_ERROR =
  "Projects are temporarily unavailable. Please try again shortly.";

export function toPublicLoadError(error: unknown): string {
  if (process.env.NODE_ENV === "development" && error instanceof Error) {
    return error.message;
  }
  return PUBLIC_LOAD_ERROR;
}
