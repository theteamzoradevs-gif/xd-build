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
                src="/images/xd-logo.png"
                alt={`${siteConfig.name} logo`}
                width={164}
                height={48}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.blurb}>{siteConfig.tagline}</p>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                LinkedIn
              </a>
              <span aria-hidden> · </span>
              <a href={wa} rel="noreferrer" target="_blank">
                WhatsApp
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
            <p className={styles.colTitle}>Expertise</p>
            <ul className={styles.links}>
              <li>
                <Link href="/services#bim">BIM coordination</Link>
              </li>
              <li>
                <Link href="/services#mep">MEP systems</Link>
              </li>
              <li>
                <Link href="/services#vdc">VDC &amp; planning</Link>
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
