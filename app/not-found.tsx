import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      style={{
        width: "min(100% - 2rem, var(--max-content))",
        margin: "4rem auto",
        textAlign: "center",
        display: "grid",
        gap: "1rem",
        justifyItems: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2.25rem" }}>Page not found</h1>
      <p style={{ margin: 0, color: "var(--color-muted)", maxWidth: "50ch" }}>
        The page you wanted is still in coordination. Head back home or jump to a
        staffed inbox.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
        <Button href="/">Return home</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </section>
  );
}
