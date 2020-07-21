import React from "react";

import { skills } from "../../../data/skills";
import { SkillCard } from "./skill-card/skill-card";

import styles from "./skills.module.scss";
import { Section } from "../../../components/section/section";

const Skills = (): JSX.Element => {
  return (
    <Section background="light">
      <h2>Skills die zorgen voor resultaat</h2>
      <div className={styles.skillWrapper}>
        {skills && skills.length > 0 && (
          <>
            {skills.map((skill) => (
              <SkillCard key={skill.id} name={skill.name} percentage={skill.percentage} />
            ))}
          </>
        )}
      </div>
    </Section>
  );
};

export { Skills };
