import { fetchJson } from "@/lib/api/fetch-json";

export type ContactEnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

export type ContactEnquiryResponse = {
  enquiry?: {
    id: string;
    name: string;
    phone: string;
    email: string;
    projectType: string;
    message: string;
    createdAt: string;
  };
  error?: string;
};

const API_ERROR_FIELD: Record<string, keyof ContactEnquiryPayload> = {
  "Please enter your name.": "name",
  "Add a reachable phone number.": "phone",
  "Enter a valid email.": "email",
  "Tell us a bit more (20+ characters).": "message",
};

/** Maps admin 400 `error` text to a form field when it matches server validation. */
export function enquiryErrorField(
  message: string,
): keyof ContactEnquiryPayload | null {
  return API_ERROR_FIELD[message] ?? null;
}

export async function submitContactEnquiry(
  input: ContactEnquiryPayload,
): Promise<ContactEnquiryResponse> {
  return fetchJson<ContactEnquiryResponse>("/api/enquiries", {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input.name.trim(),
      phone: input.phone.trim(),
      email: input.email.trim(),
      projectType: input.projectType.trim() || "Other",
      message: input.message.trim(),
    }),
  });
}
