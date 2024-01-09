"use client";
import Link from "next/link";
import React, { useState } from "react";
import { raleway } from "../ui/fonts";
import Burger from "../../public/svg/burger.svg";
import CloseIcon from "../ui/CloseIcon";
import { usePathname } from "next/navigation";
import PhoneIcon from "../ui/PhoneIcon";
import MailIcon from "../ui/MailIcon";
import styles from "../ui/styles/header.module.css";

export default function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const path = usePathname();

  return (
    <header className={styles.headerSection}>
      <section className={styles.headerSectionLogoAndNavSection}>
        <h2>
          <Link
            href="/"
            className={`${raleway.className} antialiased ${styles.headerSectionLogoAndNavSectionLogo}`}
          >
            <span className="text-logoDesignColor">Web</span>studio
          </Link>
        </h2>
        <button onClick={() => setShowMobMenu(true)} className=" md:hidden ">
          <Burger width={40} height={40} />
        </button>
        <nav className="hidden md:block">
          <h3 className="visually-hidden">Навігаційне меню</h3>
          <ul className={styles.headerSectionLogoAndNavSectionNav}>
            <li>
              <Link
                href="/"
                className={`${styles.headerSectionLogoAndNavSectionNavLink}  ${
                  path === "/"
                    ? styles.headerSectionLogoAndNavSectionNavHomeLink
                    : null
                }`}
              >
                Студія
                <span
                  className={
                    path === "/"
                      ? styles.headerSectionLogoAndNavSectionNavHomeLinkAfter
                      : null
                  }
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={`${styles.headerSectionLogoAndNavSectionNavLink}  ${
                  path === "/portfolio"
                    ? styles.headerSectionLogoAndNavSectionNavPortfolioLink
                    : null
                }`}
              >
                Портфоліо
                <span
                  className={
                    path === "/portfolio"
                      ? styles.headerSectionLogoAndNavSectionNavPortfolioLinkAfter
                      : null
                  }
                ></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/"
                className={styles.headerSectionLogoAndNavSectionNavLink}
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className={styles.headerSectionLogoAndNavSectionContactsSection}>
        <h2 className="visually-hidden">Контакти </h2>
        <article>
          <h3 className="visually-hidden">Телефон </h3>

          <Link
            href="tel:+380961111111"
            className={styles.headerSectionLogoAndNavSectionContactsSectionLink}
          >
            <PhoneIcon /> +38 096 111 11 11
          </Link>
        </article>
        <article>
          <h3 className="visually-hidden">Email </h3>
          <Link
            href="mailto:info@devstudio.com"
            className={styles.headerSectionLogoAndNavSectionContactsSectionLink}
          >
            <MailIcon /> info@devstudio.com
          </Link>
        </article>
      </section>
      <section
        className={`${styles.headerSectionMobMenuSection} translate-x-[-50%] 
         ${showMobMenu ? "translate-y-[0]" : "translate-y-[-100%]"} 
         `}
      >
        <h2 className="visually-hidden">Мобільне меню</h2>
        <button
          className={styles.headerSectionMobMenuSectioncloseBtn}
          onClick={() => setShowMobMenu(false)}
        >
          <CloseIcon />
        </button>
        <nav>
          <h3 className="visually-hidden">Навігаційне меню</h3>
          <ul className={styles.headerSectionMobMenuSectionNavSection}>
            <li>
              <Link
                href="/"
                onClick={() => setShowMobMenu(false)}
                className={`${
                  styles.headerSectionMobMenuSectionNavSectionLink
                } ${path === "/" ? "text-[#2196f3]" : null}`}
              >
                Студія
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/portfolio"
                onClick={() => setShowMobMenu(false)}
                className={`${
                  styles.headerSectionMobMenuSectionNavSectionLink
                } ${path === "/portfolio" ? "text-[#2196f3]" : null}`}
              >
                Портфоліо
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/"
                onClick={() => setShowMobMenu(false)}
                className={styles.headerSectionMobMenuSectionNavSectionLink}
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <h3 className="visually-hidden">Контакти та соц. мережі</h3>
          <section className={styles.headerSectionMobMenuSectionContactSection}>
            <h4 className="visually-hidden">Контакти </h4>
            <article>
              <h5 className="visually-hidden">Телефон </h5>
              <Link
                href="tel:+380961111111"
                className={styles.headerSectionMobMenuSectionContactSectionTel}
              >
                +38 096 111 11 11
              </Link>
            </article>
            <article>
              <h5 className="visually-hidden">Email </h5>
              <Link
                href="mailto:info@devstudio.com"
                className={styles.headerSectionMobMenuSectionContactSectionMail}
              >
                info@devstudio.com
              </Link>
            </article>
          </section>
          <section
            className={styles.headerSectionMobMenuSectionSocialLinkSection}
          >
            <h3 className="visually-hidden">Соц. мережі</h3>
            <article
              className={
                styles.headerSectionMobMenuSectionSocialLinkSectionFirstLink
              }
            >
              <h4 className="visually-hidden">Instagram</h4>
              <Link href="/">Instagram</Link>
            </article>
            <article
              className={
                styles.headerSectionMobMenuSectionSocialLinkSectionLink
              }
            >
              <h4 className="visually-hidden">Twitter</h4>
              <Link href="/">Twitter</Link>
            </article>
            <article
              className={
                styles.headerSectionMobMenuSectionSocialLinkSectionLink
              }
            >
              <h4 className="visually-hidden">Facebook</h4>
              <Link href="/">Facebook</Link>
            </article>
            <article
              className={
                styles.headerSectionMobMenuSectionSocialLinkSectionLastLink
              }
            >
              <h4 className="visually-hidden">LinkedIn</h4>
              <Link href="/">LinkedIn</Link>
            </article>
          </section>
        </section>
      </section>
    </header>
  );
}
