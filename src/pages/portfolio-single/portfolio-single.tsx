import React from "react";

import { Section } from "../../components/section/section";
import { Projectcard } from "../../components/projects/project-card/project-card";
import { portfolioItems } from "../../data/portfolio";
import styles from "./portfolio-single.module.scss";

const PortfolioSingle = (): JSX.Element => {
  const portfolio = portfolioItems;
  return (
    <>
      {portfolio && portfolio.length > 0 && (
        <>
          {portfolio.map((portfolio) => (
            <div key={portfolio.id}>
              <Section background="darker" size="fullWidth">
                <div className={styles.intro}>
                  <div>
                    <Projectcard name={portfolio.name} image={portfolio.imageDesktop} size="578px" />
                  </div>
                  <div>
                    <h1>{portfolio.name}</h1>
                    <p>{portfolio.introText}</p>
                  </div>
                </div>
              </Section>
              <Section title={portfolio.purposeTitle} background="light">
                <p>{portfolio.purposeText}</p>
              </Section>
              <Section background="darker" size="fullWidth">
                <div className={styles.containerMedium}>
                  <h2>{portfolio.roleTitle}</h2>
                  <p>{portfolio.roleText}</p>
                </div>
                <div className={styles.portfolioImages}>
                  <Projectcard name={portfolio.name} image={portfolio.imageDesktop} size="778px" />
                  {portfolio.imageMobile && (
                    <Projectcard name={portfolio.name} image={portfolio.imageMobile} size="334px" variant="iphone" />
                  )}
                </div>
              </Section>
              <Section title={portfolio.uptodateTitle} background="light">
                <p>{portfolio.uptodateText}</p>
              </Section>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export { PortfolioSingle };
