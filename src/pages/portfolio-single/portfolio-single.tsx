import React from "react";

import { Section } from "../../components/section/section";
import { Projectcard } from "../../components/projects/project-card/project-card";
import { portfolioItems } from "../../data/portfolio";

const PortfolioSingle = (): JSX.Element => {
  const portfolio = portfolioItems;
  return (
    <>
      {portfolio && portfolio.length > 0 && (
        <>
          {portfolio.map((portfolio) => (
            <>
              <Section key={portfolio.id} title={portfolio.name} background="darker">
                <Projectcard name={portfolio.name} image={portfolio.imageDesktop} />
                <p>{portfolio.introText}</p>
              </Section>
              <Section title={portfolio.purposeTitle} background="light">
                <p>{portfolio.purposeText}</p>
              </Section>
              <Section title={portfolio.roleTitle} background="darker">
                <p>{portfolio.roleText}</p>
                <Projectcard name={portfolio.name} image={portfolio.imageDesktop} />
              </Section>
              <Section title={portfolio.uptodateTitle} background="light">
                <p>{portfolio.uptodateText}</p>
              </Section>
            </>
          ))}
        </>
      )}
    </>
  );
};

export { PortfolioSingle };
