import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
} & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "href" | "children"
  >;

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const classes = cn(styles.btn, styles[variant], props.className);

  if ("href" in props && props.href) {
    const {
      href,
      children,
      variant: _v,
      className: _c,
      target,
      rel,
      ...anchorRest
    } = props as ButtonAsLink;

    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          className={classes}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={rel} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", variant: _v, className: _c, ...btnRest } =
    props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...btnRest}>
      {children}
    </button>
  );
}
