"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { HOME_SERVICES, HOME_SERVICES_SUBQUOTE } from "@/lib/servicesHome";
import styles from "./HomeServicesGrid.module.css";

export function HomeServicesGrid() {
  return (
    <Section bleed className={styles.section} aria-labelledby="home-services-title">
      <div className={styles.header}>
        <h2 id="home-services-title" className={styles.title}>
          Our services
        </h2>
        <p className={styles.subquote}>{HOME_SERVICES_SUBQUOTE}</p>
      </div>
      <div className={styles.grid}>
        {HOME_SERVICES.map((item, i) => (
          <motion.article
            key={item.id}
            className={styles.card}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ y: -3 }}
          >
            <div className={styles.iconWrap}>
              <Image
                src={item.imageSrc}
                alt=""
                width={120}
                height={120}
                className={styles.iconImg}
              />
            </div>
            <div className={styles.copy}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <span className={styles.underline} aria-hidden />
              <p className={styles.desc}>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
