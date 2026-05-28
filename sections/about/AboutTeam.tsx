import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { TEAM_MEMBERS, TEAM_QUOTE } from "@/lib/team";
import styles from "./AboutTeam.module.css";

export function AboutTeam() {
  const nonFounderIndices = TEAM_MEMBERS.filter((m) => !m.isFounder);

  return (
    <Section className={styles.section} aria-labelledby="our-team-title">
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h2 id="our-team-title" className={styles.title}>
            Our Founder
          </h2>
          <div className={styles.accent} aria-hidden />
        </div>
        <blockquote className={styles.quote}>
          <p>&ldquo;{TEAM_QUOTE}&rdquo;</p>
        </blockquote>
      </header>

      <ul className={styles.list}>
        {TEAM_MEMBERS.map((member) => {
          const nfIdx = member.isFounder
            ? -1
            : nonFounderIndices.findIndex((m) => m.name === member.name);
          const rowMirror =
            !member.isFounder && nfIdx >= 0 && nfIdx % 2 === 0;

          return (
            <li
              key={member.name}
              className={`${styles.row} ${member.isFounder ? styles.rowFounder : ""} ${rowMirror ? styles.rowMirror : ""}`}
            >
              <div
                className={`${styles.hexShell} ${member.isFounder ? styles.hexShellFounder : ""}`}
                aria-hidden
              >
                <div
                  className={`${styles.hexBorder} ${member.isFounder ? styles.hexBorderFounder : ""}`}
                />
                <div className={`${styles.hexPhoto} ${member.isFounder ? styles.hexPhotoFounder : ""}`}>
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    className={`${styles.hexImg} ${member.isFounder ? styles.hexImgFounder : ""}`}
                    sizes="(max-width: 640px) 32vw, 220px"
                  />
                </div>
              </div>
              <div className={styles.copy}>
                <p className={`${styles.name} ${member.isFounder ? styles.nameFounder : ""}`}>
                  {member.name.toUpperCase()}
                </p>
                {member.credentials ? (
                  <p className={styles.credentials}>{member.credentials.toUpperCase()}</p>
                ) : null}
                <p className={styles.role}>{member.title.toUpperCase()}</p>
                <p className={styles.bio}>{member.bio}</p>
                {member.linkedIn ? (
                  <Link
                    className={styles.linkedIn}
                    href={member.linkedIn}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={styles.linkedInSvg}
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8.98H4.7V24H.24zM8.98 8.98h4.24v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.95 5.29 6.78V24h-4.45v-7.06c0-1.68-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.74V24H8.98z" />
                    </svg>
                    <span className={styles.srOnly}>LinkedIn profile</span>
                  </Link>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
