import React, { useEffect, useState } from "react";
import styles from "../ui/styles/portfolioCollect.module.css";
import Image from "next/image";
import portfolioData from "../lib/portfolio-data";

const textFish =
  "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.";

function PortfolioCollect({ activeBtn }) {
  const [collectProject, setCollectProject] = useState([]);
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
    <section>
      <h3 className="visually-hidden">Коллекція проектів</h3>
      <div className={styles.portfoloiCollectSectionCardWrap}>
        {collectProject.map((el) => {
          return (
            <article key={el.id} className={styles.portfoloiCollectSectionCard}>
              <hgroup className={styles.portfoloiCollectSectionCardHGroup}>
                <h4 className={styles.portfoloiCollectSectionCardHGroupTitle}>
                  {el.title}
                </h4>
                <p className={styles.portfoloiCollectSectionCardHGroupDesc}>
                  {el.desc}
                </p>
              </hgroup>
              <div className={styles.portfoloiCollectSectionCardImgWrap}>
             
                  <Image src={el.mobImg} alt={el.alt} className="md:hidden"/>
                  <Image src={el.tabImg} alt={el.alt} className="hidden md:block xl:hidden" />
                  <Image src={el.descImg} alt={el.alt} className="hidden xl:block" />
                 
                 <div className={styles.portfoloiCollectSectionCardImgWrapTextWrap}>
                   <p className={styles.portfoloiCollectSectionCardImgWrapText}>
                  {textFish}
                </p> 
                 </div>
                
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default PortfolioCollect;
