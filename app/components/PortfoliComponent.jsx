"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import portfolioData from "../lib/portfolio-data";
import styles from "../ui/styles/portfolioComponent.module.css";

const textFish =
  "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.";


function PortfoliComponent() {
  const [collectProject, setCollectProject] = useState([]);
  const [activeBtn, setActiveBtn] = useState("all");
  useEffect(() => {
    if (activeBtn === "all") {
      return setCollectProject(portfolioData);
    } else {
      return setCollectProject(
        portfolioData.filter((e) => {
          return e.type === activeBtn;
        })
      );
    }
  }, [activeBtn]);
  return (
    <>
      {" "}
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
      <section>
        <h3 className="visually-hidden">Коллекція проектів</h3>
        <div className={styles.portfoloiCollectSectionCardWrap}>
          {collectProject.map((el) => {
            return (
              <article
                key={el.id}
                className={styles.portfoloiCollectSectionCard}
              >
                <hgroup className={styles.portfoloiCollectSectionCardHGroup}>
                  <h4 className={styles.portfoloiCollectSectionCardHGroupTitle}>
                    {el.title}
                  </h4>
                  <p className={styles.portfoloiCollectSectionCardHGroupDesc}>
                    {el.desc}
                  </p>
                </hgroup>
                <div className={styles.portfoloiCollectSectionCardImgWrap}>
                  <Image src={el.mobImg} alt={el.alt} className="md:hidden" />
                  <Image
                    src={el.tabImg}
                    alt={el.alt}
                    className="hidden md:block xl:hidden"
                  />
                  <Image
                    src={el.descImg}
                    alt={el.alt}
                    className="hidden xl:block"
                  />

                  <div
                    className={
                      styles.portfoloiCollectSectionCardImgWrapTextWrap
                    }
                  >
                    <p
                      className={styles.portfoloiCollectSectionCardImgWrapText}
                    >
                      {textFish}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default PortfoliComponent;
