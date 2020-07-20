import React from "react";
import { useParams } from "react-router-dom";

import { Section } from "../../components/section/section";
import { Projectcard } from "../../components/projects/project-card/project-card";
import { projectItems } from "../../data/projects";

import styles from "./project-single.module.scss";

const ProjectSingle = (): JSX.Element => {
  const { name } = useParams();
  const project = projectItems.find((item) => item.name.toLocaleLowerCase().replace(/ /g, "-") === name);

  return (
    <>
      {project && (
        <>
          {project.imageDesktop && (
            <Section background="darker" size="fullWidth">
              <div className={styles.intro}>
                <div>
                  <Projectcard name={project.name} image={project.imageDesktop} size="578px" />
                </div>
                <div>
                  <h1>{project.name}</h1>
                  <p>{project.introText}</p>
                </div>
              </div>
            </Section>
          )}
          {project.purposeText && (
            <Section title={project.purposeTitle} background="light">
              <p>{project.purposeText}</p>
            </Section>
          )}
          {project.roleTitle && (
            <Section background="darker" size="fullWidth">
              <div className={styles.containerMedium}>
                <h2>{project.roleTitle}</h2>
                <p>{project.roleText}</p>
              </div>
              <div className={styles.projectImages}>
                <Projectcard name={project.name} image={project.imageDesktop} size="578px" />
                {project.imageMobile && (
                  <Projectcard name={project.name} image={project.imageMobile} size="334px" variant="iphone" />
                )}
              </div>
            </Section>
          )}
          {project.uptodateTitle && (
            <Section title={project.uptodateTitle} background="light">
              <p>{project.uptodateText}</p>
            </Section>
          )}
        </>
      )}
    </>
  );
};

export { ProjectSingle };
