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

const nameRegex = /^[a-zA-Z\s]+$/;
const phoneRegex = /^\d{1,12}$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(50, "Name is too long.")
    .regex(nameRegex, "Name can only contain letters."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter a phone number.")
    .regex(phoneRegex, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address (e.g., name@company.com)."),
  projectType: z.string().min(1, "Please select a project type."),
  message: z
    .string()
    .trim()
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

  const filterNameInput = (value: string) => value.replace(/[^a-zA-Z\s]/g, "");

  const filterPhoneInput = (value: string) =>
    value.replace(/[^0-9]/g, "").slice(0, 12);

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
            {...register("name", {
              onChange: (event) => {
                const filtered = filterNameInput(event.target.value);
                if (filtered !== event.target.value) {
                  event.target.value = filtered;
                }
                setValue("name", filtered, { shouldValidate: true });
              },
            })}
            placeholder="Jordan Lee"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
          />
          <span className={styles.errorSlot} role="alert">
            {errors.name?.message ?? ""}
          </span>
        </label>

        <label className={styles.field}>
          <span>Phone</span>
          <input
            {...register("phone", {
              onChange: (event) => {
                const filtered = filterPhoneInput(event.target.value);
                if (filtered !== event.target.value) {
                  event.target.value = filtered;
                }
                setValue("phone", filtered, { shouldValidate: true });
              },
            })}
            type="tel"
            inputMode="numeric"
            maxLength={12}
            placeholder="Phone number"
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : "false"}
          />
          <span className={styles.errorSlot} role="alert">
            {errors.phone?.message ?? ""}
          </span>
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
        <span className={styles.errorSlot} role="alert">
          {errors.email?.message ?? ""}
        </span>
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
        <span className={styles.errorSlot} role="alert">
          {errors.projectType?.message ?? ""}
        </span>
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Scope, location, milestones, what success looks like…"
          aria-invalid={errors.message ? "true" : "false"}
        />
        <span className={`${styles.errorSlot} ${styles.errorSlotTall}`} role="alert">
          {errors.message?.message ?? ""}
        </span>
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