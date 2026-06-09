export type ContactEnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactEnquiryResponse = {
  enquiry?: {
    id: string;
    name: string;
    phone: string;
    email: string;
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

/** POST same-origin route; server proxies to admin via CMS_API_BASE_URL. */
export async function submitContactEnquiry(
  input: ContactEnquiryPayload,
): Promise<ContactEnquiryResponse> {
  const res = await fetch("/api/enquiries", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: input.name.trim(),
      phone: input.phone.trim(),
      email: input.email.trim(),
      message: input.message.trim(),
    }),
  });

  const data = (await res.json()) as ContactEnquiryResponse & { error?: string };
  if (!res.ok) {
    throw new Error(
      typeof data.error === "string" ? data.error : `API ${res.status}`,
    );
  }
  return data;
}
