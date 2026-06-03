"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  enquiryErrorField,
  submitContactEnquiry,
} from "@/lib/api/enquiries";
import { siteConfig } from "@/lib/site";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  submit?: string;
}

function popupEnquiryMessage(data: FormData): string {
  return [
    "Consultation request from homepage popup.",
    `Name: ${data.fullName.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone.trim()}`,
  ].join("\n");
}

function mapApiErrorToField(
  message: string,
): keyof FormErrors | null {
  const field = enquiryErrorField(message);
  if (field === "name") return "fullName";
  if (field === "email") return "email";
  if (field === "phone") return "phone";
  return null;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 1rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  color: "#1f2937",
  backgroundColor: "#ffffff",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 600,
  color: "#4b5563",
  marginBottom: "0.25rem",
};

const fieldErrorStyle: React.CSSProperties = {
  color: "#ef4444",
  fontSize: "11px",
  margin: "4px 0 0 0",
};

export default function FormPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const hasSeenPopupThisSession = sessionStorage.getItem(
      "hasSeenPopupThisSession",
    );

    if (!hasSeenPopupThisSession) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPopupThisSession", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      if (/[^a-zA-Z\s]/.test(value)) return;
    }

    if (name === "phone") {
      if (/[^0-9]/.test(value) || value.length > 10) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (formData.fullName.trim().length < 2) {
      newErrors.fullName =
        "Please enter a valid name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitContactEnquiry({
        name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        projectType: "Other",
        message: popupEnquiryMessage(formData),
      });
      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "" });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      const field = mapApiErrorToField(message);
      if (field) {
        setErrors({ [field]: message });
      } else {
        setErrors({ submit: message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(8px)",
        }}
        onClick={() => setIsOpen(false)}
        aria-hidden
      />

      <div
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl z-10"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "28rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "0.75rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          zIndex: 10,
          padding: "2.25rem 2rem 1.75rem 2rem",
          boxSizing: "border-box",
        }}
        role="dialog"
        aria-labelledby="popup-form-title"
        aria-modal="true"
      >
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#EAA135",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: "bold",
            padding: "0.35rem 1.25rem",
            borderRadius: "0.375rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            whiteSpace: "nowrap",
          }}
        >
          Build with Clarity
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1.25rem",
            fontSize: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#9ca3af",
          }}
          aria-label="Close popup"
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", marginTop: "0.5rem" }} role="status">
            <h3
              id="popup-form-title"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#111827",
                margin: "0 0 0.5rem 0",
              }}
            >
              Thanks, we received your note.
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#4b5563",
                margin: "0 0 1.25rem 0",
                lineHeight: 1.5,
              }}
            >
              We reply within <strong>24 hours</strong> on business days.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                width: "100%",
                backgroundColor: "#EAA135",
                color: "#000000",
                fontWeight: 500,
                fontSize: "0.875rem",
                padding: "0.75rem 1rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div
              className="text-center mt-2 mb-5"
              style={{
                textAlign: "center",
                marginBottom: "1.25rem",
                marginTop: "0.5rem",
              }}
            >
              <h3
                id="popup-form-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: "0 0 0.25rem 0",
                }}
              >
                Get Consultation
              </h3>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  margin: "0 0 1rem 0",
                }}
              >
                Tell us about your project to unlock expert insights.
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#1f2937",
                  borderTop: "1px solid #f3f4f6",
                  paddingTop: "0.75rem",
                  margin: "0.5rem 0 0 0",
                  lineHeight: 1.4,
                }}
              >
                From Blueprint to Reality: Your Vision, Built with Precision.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
            >
              <div>
                <label htmlFor="popup-fullName" style={labelStyle}>
                  Name
                </label>
                <input
                  id="popup-fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  autoComplete="name"
                  style={{
                    ...inputStyle,
                    border: errors.fullName
                      ? "1px solid #ef4444"
                      : inputStyle.border,
                  }}
                />
                {errors.fullName ? (
                  <p style={fieldErrorStyle}>{errors.fullName}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="popup-email" style={labelStyle}>
                  Email Address
                </label>
                <input
                  id="popup-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  style={{
                    ...inputStyle,
                    border: errors.email
                      ? "1px solid #ef4444"
                      : inputStyle.border,
                  }}
                />
                {errors.email ? (
                  <p style={fieldErrorStyle}>{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="popup-phone" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  id="popup-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit Phone Number"
                  autoComplete="tel"
                  style={{
                    ...inputStyle,
                    border: errors.phone
                      ? "1px solid #ef4444"
                      : inputStyle.border,
                  }}
                />
                {errors.phone ? (
                  <p style={fieldErrorStyle}>{errors.phone}</p>
                ) : null}
              </div>

              {errors.submit ? (
                <p style={fieldErrorStyle}>{errors.submit}</p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  backgroundColor: "#EAA135",
                  color: "#000000",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  cursor: isSubmitting ? "wait" : "pointer",
                  marginTop: "0.5rem",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "Sending…" : "Send Enquiry →"}
              </button>
            </form>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0.85rem 0",
              }}
            >
              <div style={{ flexGrow: 1, borderTop: "1px solid #e5e7eb" }} />
              <span
                style={{
                  flexShrink: 0,
                  margin: "0 0.75rem",
                  fontSize: "10px",
                  color: "#9ca3af",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                OR
              </span>
              <div style={{ flexGrow: 1, borderTop: "1px solid #e5e7eb" }} />
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                width: "100%",
                backgroundColor: "#050505",
                color: "white",
                fontWeight: 500,
                fontSize: "0.875rem",
                padding: "0.75rem 1rem",
                borderRadius: "0.375rem",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                boxSizing: "border-box",
              }}
            >
              Send Email
            </a>
          </>
        )}
      </div>
    </div>
  );
}
