import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Placeholder terms for XD Build marketing demo.",
};

export default function TermsPage() {
  return (
    <article className="legal">
      <header>
        <p className="pageKicker">Legal</p>
        <h1 className="pageTitle">Terms of Service</h1>
        <p className="pageLead">
          Replace this outline with terms reviewed by your counsel before launch.
        </p>
      </header>
      <section>
        <h2>No professional advice</h2>
        <p>
          Marketing copy is informational, it is not engineering, legal, or safety
          guidance for your specific project.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Direct questions to your primary XD Build contact or use the published
          inbox once live.
        </p>
      </section>
    </article>
  );
}
