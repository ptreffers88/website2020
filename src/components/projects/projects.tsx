import React from "react";

import { projectItems } from "../../data/projects";
import { Projectcard } from "./project-card/project-card";

import styles from "./projects.module.scss";
import { Link } from "react-router-dom";
import { Section } from "../section/section";

const Projects = (): JSX.Element => {
  return (
    <Section background="darker" size="fullWidth">
      <h2>Werk waar ik trots op ben</h2>
      <div className={styles.projectCards}>
        {projectItems && projectItems.length > 0 && (
          <>
            {projectItems.map((project, index) => (
              <div className={styles.projectCardContainer} key={index}>
                <Link to={`/projects/${project.name.toLocaleLowerCase().replace(/ /g, "-")}`}>
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
