"use client";
import React from "react";
import { benefits } from "../lib/placeholder-data";
import Image from "next/image";
import styles from "../ui/styles/benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.benefitsSection}>
      <h3 className="visually-hidden">Наші переваги</h3>
      {benefits.map((el) => {
        return (
          <article key={el.title} className={styles.benefitsCard}>
            <hgroup>
              <h4 className={styles.benefitsCardTitle}>{el.title}</h4>
              <p className={styles.benefitsCardDesc}>{el.description}</p>
            </hgroup>
            <div className={styles.benefitsIconWrap}>
              <Image src={el.icon} alt="benefits icon" width={70} height={70} />
            </div>
          </article>
        );
      })}
    </section>
  );
}
