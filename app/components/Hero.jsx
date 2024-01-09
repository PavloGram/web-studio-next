"use client";
import React, { useState } from "react";
import CloseIcon from "../ui/CloseIcon";
import Link from "next/link";
import styles from "../ui/styles/hero.module.css";

function Hero() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section className={styles.heroSection}>
      <h3 className={styles.heroSectionTitle}>
        Ефективні рішення для вашого бізнесу
      </h3>
         <button
          type="button"
          onClick={() => setIsOpenModal(true)}
          className={styles.heroSectionBtn}
        >
          Замовити послугу
        </button>
   
      <section
        onClick={() => setIsOpenModal(false)}
        className={` ${styles.heroSectionOwerlay} ${
          isOpenModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }  `}
      ><h3 className="visually-hidden">Форма зворотнього зв’язку</h3>
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.heroSectionModal}
        >
        
          <h4 className={styles.heroSectionModalTitle}>
            Залиште свої дані, ми вам передзвонимо
          </h4>  <button
            className={styles.heroSectionModalCloseBtn}
            onClick={() => setIsOpenModal(false)}
          >
            <CloseIcon />
          </button>
          <form>
            <p className={styles.heroSectionModalFormLabel}>Ім&#39;я</p>
            <input
              type="text"
              className={styles.heroSectionModalFormInput}
            ></input>

            <p className={styles.heroSectionModalFormLabel}>Телефон</p>
            <input
              type="tel"
              className={styles.heroSectionModalFormInput}
            ></input>

            <p className={styles.heroSectionModalFormLabel}>Пошта</p>
            <input
              type="email"
              className={styles.heroSectionModalFormInput}
            ></input>

            <p className={styles.heroSectionModalFormLabel}>Коментар</p>
            <textarea
              type="email"
              rows={5}
              placeholder="Введіть текст"
              className={styles.heroSectionModalFormInput}
            ></textarea>

            <div className={styles.heroSectionModalFormChekboxWrap}>
              <input
                type="checkbox"
                className={styles.heroSectionModalFormChekbox}
              ></input>
              <p className={styles.heroSectionModalFormPolici}>
                Погоджуюся з розсилкою та приймаю{" "}
                <Link href="/" className={styles.heroSectionModalFormLink}>
                  Умови договору
                </Link>{" "}
              </p>
            </div>

            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className={styles.heroSectionModalFormBtn}
            >
              Відправити
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Hero;
