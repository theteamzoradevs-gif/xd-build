import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import styles from "../privacy/privacy.module.css"; // Fixed: Path pointing to the privacy folder

export const metadata: Metadata = {
  title: "Terms of Service | XD Build",
  description: "Read the terms and conditions for using the XD Build platform and services.",
};

export default function TermsPage() {
  return (
    <Section aria-labelledby="terms-title">
      <article className={styles.privacy}>
        {/* Header Section */}
        <header className={styles.header}>
          <p className="pageKicker">Legal</p>
          <h1 id="terms-title" className="pageTitle">
            Terms of Service
          </h1>
          <p className="pageLead">
            Please read these Terms of Service carefully before using our platform. By accessing or using 
            any part of XD Build, you agree to be bound by these terms.
          </p>
          <p className={styles.updated}>Last updated: June 2026</p>
        </header>

        {/* Content Sections */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              1. Acceptance of Terms
            </h2>
            <p className={styles.sectionText}>
              By accessing our services, you confirm your acceptance of these terms. If you do not agree 
              with any part of these conditions, you must refrain from using the website or submitting 
              project details through our platform.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. No Professional Advice
            </h2>
            <p className={styles.sectionText}>
              All marketing copy, feature demonstrations, and informational graphics displayed on this site 
              are for reference purposes only. They do not constitute formal engineering, legal, financial, 
              or safety guidance for your specific project requirements.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. User Responsibilities
            </h2>
            <p className={styles.sectionText}>
              Users are expected to provide accurate, truthful information when submitting forms or project 
              inquiries. Any misuse of our interface, automated scraping, or malicious attempts to bypass 
              our infrastructure is strictly prohibited.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Intellectual Property
            </h2>
            <p className={styles.sectionText}>
              The visual layouts, custom UI components, logos, and digital branding assets used across 
              XD Build are protected by intellectual property laws. Reproduction or redistribution of 
              these assets without explicit permission is forbidden.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Limitation of Liability
            </h2>
            <p className={styles.sectionText}>
              In no event shall XD Build or its creators be held liable for any indirect, incidental, or 
              consequential damages arising from your reliance on the promotional content or temporary 
              unavailability of this demo platform.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Contact Information
            </h2>
            <p className={styles.sectionText}>
              Direct any specific legal questions, compliance audits, or platform feedback to your primary 
              XD Build point of contact, or utilize our published official inbox once the application goes live.
            </p>
          </section>
        </div>
      </article>
    </Section>
  );
}