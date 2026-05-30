"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.css";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z.string().trim().min(7, "Add a reachable phone number."),
  email: z.string().trim().email("Enter a valid email."),
  projectType: z.string().min(1, "Select a project type."),
  message: z.string().trim().min(20, "Tell us a bit more (20+ characters)."),
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

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 450));
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] demonstration submit", _data);
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
          />
          {errors.name?.message ? (
            <span className={styles.error}>{errors.name.message}</span>
          ) : null}
        </label>
        <label className={styles.field}>
          <span>Phone</span>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-1111"
            autoComplete="tel"
          />
          {errors.phone?.message ? (
            <span className={styles.error}>{errors.phone.message}</span>
          ) : null}
        </label>
      </div>

      <label className={styles.field}>
        <span>Email</span>
        <input
          {...register("email")}
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
        />
        {errors.email?.message ? (
          <span className={styles.error}>{errors.email.message}</span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span>Project type</span>
        <select {...register("projectType")} defaultValue="">
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
        {errors.projectType?.message ? (
          <span className={styles.error}>{errors.projectType.message}</span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Scope, location, milestones, what success looks like…"
        />
        {errors.message?.message ? (
          <span className={styles.error}>{errors.message.message}</span>
        ) : null}
      </label>

      <Button
        type="submit"
        variant="primary"
        className={styles.submit}
        disabled={isSubmitting}
      >
        Submit enquiry
      </Button>
    </form>
  );
}
