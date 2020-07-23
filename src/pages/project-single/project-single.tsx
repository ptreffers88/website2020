import React from "react";
import { useParams } from "react-router-dom";

import { Section } from "../../components/section/section";
import { Projectcard } from "../../components/projects/project-card/project-card";
import { projectItems } from "../../data/projects";

import styles from "./project-single.module.scss";

const ProjectSingle = (): JSX.Element => {
  const { name } = useParams();
  const project = projectItems.find((item) => item.name.toLocaleLowerCase().replace(/ /g, "-") === name);
  const screensizeSmall = window.innerWidth <= 768;

  return (
    <>
      {project && (
        <>
          {project.imageDesktop && (
            <Section background="darker" size="fullWidth">
              {!screensizeSmall ? (
                <div className={styles.columns2}>
                  <div>
                    <Projectcard name={project.name} image={project.imageDesktop} />
                  </div>
                  <div>
                    <h1>{project.name}</h1>
                    {project.textArea1.map((text) => (
                      <p>{text.paragraph}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h1>{project.name}</h1>
                  <div className={styles.macbookContainer}>
                    <Projectcard name={project.name} image={project.imageDesktop} />
                  </div>
                  {project.textArea1.map((text) => (
                    <p>{text.paragraph}</p>
                  ))}
                </div>
              )}
            </Section>
          )}
          {project.textArea2 && (
            <Section background="light" size="fullWidth">
              <div className={styles.containerMedium}>
                {project.textArea2.map((text) => (
                  <>
                    <h2>{text.title}</h2>
                    <p>{text.paragraph}</p>
                    {text.notice && <span className={styles.notice}>{text.notice}</span>}
                  </>
                ))}
              </div>
            </Section>
          )}
          {project.textArea3 && (
            <Section background="darker" size="fullWidth">
              <div className={styles.containerMedium}>
                {project.textArea3.map((text) => (
                  <>
                    <h2>{text.title}</h2>
                    <p>{text.paragraph}</p>
                  </>
                ))}
              </div>
              <div className={`${styles.projectImages} ${styles.columns2}`}>
                <Projectcard name={project.name} image={project.imageDesktop} />
                {project.imageMobile && (
                  <Projectcard name={project.name} image={project.imageMobile} variant="iphone" />
                )}
              </div>
            </Section>
          )}
          {project.textArea4 && (
            <Section background="light">
              {project.textArea4.map((text) => (
                <>
                  <h2>{text.title}</h2>
                  <p>{text.paragraph}</p>
                </>
              ))}
            </Section>
          )}
        </>
      )}
    </>
  );
};

export { ProjectSingle };
