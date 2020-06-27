import React from "react";

import { portfolioItems } from "../../data/portfolio";
import { Projectcard } from "./project-card/project-card";

import styles from "./projects.module.scss";

const Projects = (): JSX.Element => {
  return (
    <div className={`${styles.projects} ${styles.gutterStandard}`}>
      <div className={styles.container}>
        <h2>Werk waar ik trots op ben</h2>
        <div className={styles.projectCards}>
          {portfolioItems && portfolioItems.length > 0 && (
            <>
              {portfolioItems.map((project, index) => (
                <div className={styles.projectCardContainer}>
                  <Projectcard key={index} image={project.imageDesktop} name={project.name} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { Projects };
