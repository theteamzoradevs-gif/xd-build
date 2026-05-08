import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How XD Build treats information shared through this demo site.",
};

export default function PrivacyPage() {
  return (
    <article className="legal">
      <header>
        <p className="pageKicker">Legal</p>
        <h1 className="pageTitle">Privacy Policy</h1>
        <p className="pageLead">
          Placeholder policy for the marketing demo. Replace with counsel-approved
          language before launch.
        </p>
      </header>
      <section>
        <h2>Information you share</h2>
        <p>
          We only ask for what is needed to qualify a project inquiry. This demo
          form does not transmit data yet, wire your preferred integration before
          production.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          Once email delivery is connected, align retention with your CRM and
          compliance requirements.
        </p>
      </section>
    </article>
  );
}
