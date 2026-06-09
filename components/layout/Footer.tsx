import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Footer.module.css";

const wa = whatsappHref(
  `Hi ${siteConfig.name}, I’d like to discuss a project.`
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div>
            <Link href="/" className={styles.brand}>
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                width={164}
                height={48}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.blurb}>{siteConfig.tagline}</p>
            <div className={styles.social}>
              <a href={siteConfig.linkedInCompany} rel="noreferrer" target="_blank" aria-label="XD Build on LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={styles.socialIcon}
                  role="img"
                  aria-hidden="false"
                >
                  <title>LinkedIn</title>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8.98H4.7V24H.24zM8.98 8.98h4.24v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.95 5.29 6.78V24h-4.45v-7.06c0-1.68-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.74V24H8.98z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p className={styles.colTitle}>Navigate</p>
            <ul className={styles.links}>
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Services</p>
            <ul className={styles.links}>
              <li>
                <Link href="/services#bim-solutions">BIM solutions</Link>
              </li>
              <li>
                <Link href="/services#prefab-design">Pre-fab design</Link>
              </li>
              <li>
                <Link href="/services#laser-scanning">Laser scanning</Link>
              </li>
              <li>
                <Link href="/services#renovation-design">Renovation design</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Legal</p>
            <ul className={styles.links}>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copy}>
          © {year} {siteConfig.name}. Built for clarity on complex projects.
        </p>
      </div>
    </footer>
  );
}
