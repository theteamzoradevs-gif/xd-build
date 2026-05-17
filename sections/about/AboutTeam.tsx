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
            Our Team
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
                <div className={styles.hexPhoto}>
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
                  >
                    LinkedIn profile
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
