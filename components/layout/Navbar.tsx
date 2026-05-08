"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, primaryCta, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled ? "true" : "false"}
    >
      <div className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} home`}>
          <Image
            src="/images/xd-logo.png"
            alt="Modern digital solutions company"
            width={164}
            height={48}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    data-active={active ? "true" : "false"}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active ? <span className={styles.activeBar} /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={primaryCta.href} variant="primary" className={styles.cta}>
            {primaryCta.label}
          </Button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className={styles.burger} data-open={open ? "true" : "false"} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={styles.mobile}
        data-open={open ? "true" : "false"}
      >
        <ul className={styles.mobileList}>
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  data-active={active ? "true" : "false"}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Button href={primaryCta.href} variant="primary" className={styles.mobileCta}>
              {primaryCta.label}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
