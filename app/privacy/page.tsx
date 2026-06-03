import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | XD Build",
  description: "Learn how XD Build collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <Section aria-labelledby="privacy-title">
      <article className={styles.privacy}>
        {/* Header Section */}
        <header className={styles.header}>
          <p className="pageKicker">Legal & Policy</p>
          <h1 className="pageTitle">
            Privacy Policy
          </h1>
          <p className="pageLead">
            At XD Build, we value your privacy. This policy outlines how we handle, 
            process, and safeguard the information you provide while interacting with our platform.
          </p>
          <p className={styles.updated}>Last updated: June 2026</p>
        </header>

        {/* Content Sections */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              1. Information We Collect
            </h2>
            <p className={styles.sectionText}>
              We only request information that is absolutely necessary to understand your project requirements 
              and provide accurate inquiries. This may include your name, email address, and project details 
              submitted through our forms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. How We Use Your Data
            </h2>
            <p className={styles.sectionText}>
              The data we collect is exclusively used to process your requests, personalize your experience, 
              and improve our overall services. We do not sell, trade, or share your personal details with 
              unauthorized third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Data Retention & Security
            </h2>
            <p className={styles.sectionText}>
              We retain your information only as long as necessary to fulfill the purposes outlined or to comply 
              with standard CRM policies and legal obligations. All data is handled using secure transmission 
              protocols to prevent unauthorized access.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Cookies & Analytics
            </h2>
            <p className={styles.sectionText}>
              Our website may use basic cookies to optimize user experience and analyze traffic patterns. 
              You can choose to disable cookies through your browser settings, though some features of the site 
              may not function optimally as a result.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Contact Us
            </h2>
            <p className={styles.sectionText}>
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, 
              feel free to reach out to our team directly through our contact channel.
            </p>
          </section>
        </div>
      </article>
    </Section>
  );
}