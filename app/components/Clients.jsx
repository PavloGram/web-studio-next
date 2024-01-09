import Link from "next/link";
import React from "react";
import ClientIcon1 from "../ui/ClientIcon1";
import ClientIcon2 from "../ui/ClientIcon2";
import ClientIcon3 from "../ui/ClientIcon3";
import styles from "../ui/styles/clients.module.css";

function Clients() {
  return (
    <section className={styles.clientsSection}>
      <h3 className={styles.clientsSectionTitle}>Постійні клієнти</h3>
      <div className={styles.clientsSectionCardWrap}>
        <article>
          <h4 className="visually-hidden">Ім’я компанії</h4>
          <Link className={styles.clientsSectionCard} href="/">
            <ClientIcon1 fill={"#AFB1B8"} />
          </Link>
        </article>
        <article>
        <h4 className="visually-hidden">Ім’я компанії</h4>
          <Link className={styles.clientsSectionCard} href="/">
            <ClientIcon2 fill={"#AFB1B8"} />
          </Link>
        </article>
        <article>
        <h4 className="visually-hidden">Ім’я компанії</h4>
          <Link className={styles.clientsSectionCard} href="/">
            <ClientIcon3 fill={"#AFB1B8"}/>
          </Link>
        </article>
        <article>
        <h4 className="visually-hidden">Ім’я компанії</h4>
          <Link className={styles.clientsSectionCard} href="/">
            <ClientIcon1 fill={"#AFB1B8"} />
          </Link>
        </article>
        <article>
        <h4 className="visually-hidden">Ім’я компанії</h4>
          <Link className={styles.clientsSectionCard} href="/">
            <ClientIcon2 fill={"#AFB1B8"} />
          </Link>
        </article>
        <article>
        <h4 className="visually-hidden">Ім’я компанії</h4>
          <Link className={styles.clientsSectionCard} href="/">
            <ClientIcon3 fill={"#AFB1B8"} />
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Clients;
