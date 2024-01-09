import React from "react";
import { myWorks } from "../lib/placeholder-data";
import Image from "next/image";
import styles from "../ui/styles/works.module.css";

function Works() {
  return (
    <section className={styles.worksSection}>
      <h3 className={styles.worksSectionTitle}>Чим ми займаємося</h3>
      <section className={styles.worksSectionCardWrap}>
        {myWorks.map((el) => {
          return (
            <article key={el.id} className={styles.worksSectionCard}>
              <h4 className={styles.worksSectionCardText}>{el.description}</h4>
              <Image src={el.img} alt="комп’ютер" />
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default Works;
