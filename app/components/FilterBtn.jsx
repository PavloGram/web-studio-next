import React from "react";
import styles from "../ui/styles/filterBtn.module.css";

function FilterBtn({ activeBtn, setActiveBtn }) {
  return (
    <section className={styles.filterBtnSection}>
      <h3 className="visually-hidden">Кнопки фільтрації</h3>
      <div className={styles.filterBtnSectionBtnWrap}>
        <article>
          <button
            type="button"
            onClick={() => setActiveBtn("all")}
            className={`px-[25px] py-[6px]  ${
              activeBtn === "all"
                ? "bg-[#2196f3] text-[#ffffff]"
                : "bg-primary-button-bg"
            } ${styles.filterBtnSectionBtn}`}
          >
            Усі
          </button>
        </article>
        <article>
          <button
            type="button"
            onClick={() => setActiveBtn("web-cite")}
            className={`px-[22px] py-[6px]   ${
              activeBtn === "web-cite"
                ? "bg-[#2196f3] text-[#ffffff]"
                : "bg-primary-button-bg"
            } ${styles.filterBtnSectionBtn}`}
          >
            Веб-сайти
          </button>
        </article>
        <article>
          <button
            type="button"
            onClick={() => setActiveBtn("app")}
            className={`px-[22px] py-[6px]  ${
              activeBtn === "app"
                ? "bg-[#2196f3] text-[#ffffff]"
                : "bg-primary-button-bg"
            } ${styles.filterBtnSectionBtn}`}
          >
            Додатки
          </button>
        </article>
        <article>
          <button
            type="button"
            onClick={() => setActiveBtn("design")}
            className={`px-[22px] py-[6px]  ${
              activeBtn === "design"
                ? "bg-[#2196f3] text-[#ffffff]"
                : "bg-primary-button-bg"
            } ${styles.filterBtnSectionBtn}`}
          >
            Дизайн
          </button>
        </article>
        <article>
          <button
            type="button"
            onClick={() => setActiveBtn("marketing")}
            className={`px-[22px] py-[6px]  ${
              activeBtn === "marketing"
                ? "bg-[#2196f3] text-[#ffffff]"
                : "bg-primary-button-bg"
            } ${styles.filterBtnSectionBtn}`}
          >
            Маркетинг
          </button>
        </article>
      </div>
    </section>
  );
}

export default FilterBtn;
