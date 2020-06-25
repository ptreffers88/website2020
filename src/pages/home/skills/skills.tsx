import React from "react";
import { skills } from "../../../api/skills-api";
import { SkillCard } from "./skill-card/skill-card";

import styles from "./skills.module.scss";

const Skills = (): JSX.Element => {
  return (
    <div className={`${styles.skills} ${styles.standardGutter}`}>
      <div className={styles.container}>
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
      </div>
    </div>
  );
};

export { Skills };
