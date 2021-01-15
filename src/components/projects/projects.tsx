import React from "react";
import { Link } from "react-router-dom";

import { projectItems } from "../../data/projects";
import { Projectcard } from "./project-card/project-card";
import { Section } from "../section/section";
import { ScrollTo } from "../../utils/scrollTo";

import styles from "./projects.module.scss";

const Projects = (): JSX.Element => {
  const handleClick = (): void => {
    ScrollTo("top");
  };

  return (
    <Section background="darker" size="fullWidth">
      <h2 data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">Werk waar ik trots op ben</h2>
      <div className={styles.projectCards}>
        {projectItems && projectItems.length > 0 && (
          <>
            {projectItems.map((project, index) => (
              <div className={styles.projectCardContainer} key={index} data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">
                <Link onClick={handleClick} to={`/projects/${project.name.toLocaleLowerCase().replace(/ /g, "-")}`}>
                  <Projectcard image={project.imageDesktop} name={project.name} />
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </Section>
  );
};

export { Projects };
