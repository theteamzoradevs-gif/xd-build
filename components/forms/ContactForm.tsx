"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import {
  enquiryErrorField,
  submitContactEnquiry,
} from "@/lib/api/enquiries";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.css";

// Phone validation regex: Numbers, spaces, dashes, parentheses, and plus sign
const phoneRegex = /^([+]?[\s0-9().-]*)$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(50, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Add a reachable phone number.")
    .max(15, "Phone number is too long.")
    .regex(phoneRegex, "Enter a valid phone number."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address (e.g., name@company.com)."),
  projectType: z.string().min(1, "Please select a project type."),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a bit more (minimum 20 characters).")
    .max(1000, "Message cannot exceed 1000 characters."),
});

export type ContactFormValues = z.infer<typeof schema>;

const defaultValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
};

export function ContactForm() {
  const params = useSearchParams();
  const projectHint = params.get("project");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (!projectHint) return;
    setValue(
      "message",
      `I'm interested in a project similar to: ${decodeURIComponent(projectHint)}\n\n`
    );
  }, [projectHint, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContactEnquiry({
        name: data.name,
        phone: data.phone,
        email: data.email,
        projectType: data.projectType,
        message: data.message,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      const field = enquiryErrorField(message);
      if (field) {
        setError(field, { message });
      } else {
        setError("message", { message });
      }
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className={styles.success} role="status">
        <h2 className={styles.successTitle}>Thanks, we received your note.</h2>
        <p className={styles.successText}>
          We reply within <strong>24 hours</strong> on business days. If your
          timeline is urgent, call or WhatsApp and mention your project type.
        </p>
        <Button type="button" variant="secondary" onClick={() => reset(defaultValues)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input
            {...register("name")}
            placeholder="Jordan Lee"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.message && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </label>

        <label className={styles.field}>
          <span>Phone</span>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-1111"
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone?.message && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </label>
      </div>

      <label className={styles.field}>
        <span>Email</span>
        <input
          {...register("email")}
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.message && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </label>

      <label className={styles.field}>
        <span>Project type</span>
        <select 
          {...register("projectType")} 
          aria-invalid={errors.projectType ? "true" : "false"}
        >
          <option value="" disabled>
            Select one…
          </option>
          <option value="New build / core and shell">New build</option>
          <option value="Tenant improvement / TI">Tenant improvement</option>
          <option value="MEP coordination">MEP coordination</option>
          <option value="BIM / VDC support">BIM / VDC support</option>
          <option value="Healthcare / labs">Healthcare / labs</option>
          <option value="Data centers / mission critical">
            Data centers / mission critical
          </option>
          <option value="Other">Other</option>
        </select>
        {errors.projectType?.message && (
          <span className={styles.error}>{errors.projectType.message}</span>
        )}
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Scope, location, milestones, what success looks like…"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message?.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </label>

      <Button
        type="submit"
        variant="primary"
        className={styles.submit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit enquiry"}
      </Button>
    </form>
  );
}