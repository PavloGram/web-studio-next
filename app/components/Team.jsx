import React from "react";
import { team } from "../lib/placeholder-data";
import Image from "next/image";
import LinkedinIcon from "../ui/LinkedinIcon";
import InstagramIcon from "../ui/InstagarmIcon";
import TwitterIcon from "../ui/TwitterIcon";
import FacebookIcon from "../ui/FacebookIcon";
import styles from "../ui/styles/team.module.css";

export default function Team() {
  return (
    <section className={styles.teamSection}>
      <h3 className={styles.teamSectionTitle}>Наша команда</h3>
      <div className={styles.teamSectionCardWrap}>
        {team.map((el) => {
          return (
            <article key={el.id} className={styles.teamSectionCard}>
              <h4 className="visually-hidden">{el.name}</h4>
              <section>
                <h5 className="visually-hidden">Фото</h5>
                  <div className={styles.teamSectionCardImgWrap}>
                  <Image src={el.mobPhoto2x}  alt={el.alt}  className="md:hidden" />
                  <Image src={el.tabPhoto2x} alt={el.alt}  className="hidden md:block xl:hidden" />
                  <Image src={el.descPhoto2x} alt={el.alt}  className="hidden xl:block" />
                </div>
              </section>
              <section>
                <h5 className={styles.teamSectionCardTitle}>{el.name}</h5>
                <p className={styles.teamSectionCardDesc}>{el.position}</p>
              </section>

              <section className={styles.teamSectionCardSocialWrap}>
              <h5 className="visually-hidden">
                       соц. мережi
                    </h5>
                {el.socialNetworks.instagram.link && (
                  <article>
                    <h6 className="visually-hidden" >Instagram</h6>

                    <a
                      href={el.socialNetworks.instagram.link}
                      className={styles.teamSectionCardSocialLink}
                    >
                      <InstagramIcon fill={"#afb1b8"} />
                    </a>
                  </article>
                )}
                {el.socialNetworks.twitter.link && (
                  <article>
                    <h6 className="visually-hidden" >Twitter</h6>

                    <a
                      href={el.socialNetworks.twitter.link}
                      className={styles.teamSectionCardSocialLink}
                    >
                      <TwitterIcon fill={"#afb1b8"}  />
                    </a>
                  </article>
                )}
                {el.socialNetworks.facebook.link && (
                  <article>
                  <h6 className="visually-hidden" >Facebook</h6>

                    <a
                      href={el.socialNetworks.facebook.link}
                      className={styles.teamSectionCardSocialLink}
                    >
                      <FacebookIcon fill={"#afb1b8"}  />
                    </a>
                  </article>
                )}
                {el.socialNetworks.linkedin.link && (
                  <article>
                    <h6 className="visually-hidden" >Linkedin</h6>

                    <a
                      href={el.socialNetworks.linkedin.link}
                      className={styles.teamSectionCardSocialLink}
                    >
                      <LinkedinIcon fill={"#afb1b8"}  />
                    </a>
                  </article>
                )}
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
}
