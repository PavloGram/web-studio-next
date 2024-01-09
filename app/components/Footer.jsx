"use client";
import Link from "next/link";
import React from "react";
import InstagarmIcon from "../ui/InstagarmIcon";
import TwitterIcon from "../ui/TwitterIcon";
import FacebookIcon from "../ui/FacebookIcon";
import LinkedinIcon from "../ui/LinkedinIcon";
import SendIcon from "../ui/SendIcon";
import styles from "../ui/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerSectionWrap}>
        <section className={styles.footerSectionLogoAndAddressSection}>
          <h2 className={styles.footerSectionLogoAndAddressSectionTitle}>
            <span className="text-[#2196f3] ">Web</span>Studio
          </h2>
          {/* <h2 className="visually-hidden">Адресса</h2> */}
          <address className={styles.footerSectionLogoAndAddressSectionAddress}>
            <p>м. Київ, пр-т Лесі Українки, 26</p>
            <Link
              href="mailto:info@devstudio.com"
              className={
                styles.footerSectionLogoAndAddressSectionAddressLinkColor
              }
            >
              info@devstudio.com
            </Link>
            <Link
              href="tel:+380961111111"
              className={
                styles.footerSectionLogoAndAddressSectionAddressLinkColor
              }
            >
              +38 096 111 11 11
            </Link>
          </address>
        </section>

        <section className={styles.footerSectionAddSection}>
          <h2 className={styles.footerSectionAddSectionTitle}>приєднуйтесь</h2>
          <div className="flex justify-center gap-x-[10px]">
            <article>
              <h4 className="visually-hidden">Instagram</h4>
              <Link href="/" className={styles.footerSectionAddSectionLink}>
                <InstagarmIcon fill={"#ffffff"} />
              </Link>
            </article>
            <article>
              <h4 className="visually-hidden">Twitter</h4>
              <Link href="/" className={styles.footerSectionAddSectionLink}>
                <TwitterIcon fill={"#ffffff"} />
              </Link>
            </article>
            <article>
              <h4 className="visually-hidden">Facebook</h4>
              <Link href="/" className={styles.footerSectionAddSectionLink}>
                <FacebookIcon fill={"#ffffff"} />
              </Link>
            </article>
            <article>
              <h4 className="visually-hidden">Linkedin</h4>
              <Link href="/" className={styles.footerSectionAddSectionLink}>
                <LinkedinIcon fill={"#ffffff"} />
              </Link>
            </article>
          </div>
        </section>
        <section>
          <h2 className={styles.footerSectionFormTitle}>
            Підпишіться на розсилку
          </h2>
          <form className={styles.footerSectionForm}>
            <input
              className={styles.footerSectionFormInput}
              placeholder="E-mail"
            ></input>
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className={`${styles.footerSectionFormBtn} bg-[#2196f3]`}
            >
              Підписатися
              <SendIcon />
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
}
