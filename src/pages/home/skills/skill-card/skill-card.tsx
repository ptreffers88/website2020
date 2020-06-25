import React, { useState } from "react";
import { isInViewport } from "../../../../utils/isInViewport";

import styles from "./skill-card.module.scss";

export interface ISkillCardProps {
  name: string;
  percentage: number;
}

const SkillCard = (props: ISkillCardProps): JSX.Element => {
  const [finalpercentage, setFinalpercentage] = useState<number>(0);

  window.addEventListener("scroll", function () {
    let elem = document.querySelector("span");
    if (elem && isInViewport(elem)) {
      setFinalpercentage(props.percentage);
    }
  });

  return (
    <div className={styles.skill}>
      <h3 className={styles.name}>{props.name}</h3>
      <div className={styles.progress}>
        <div className={styles.progressMeter} style={{ width: `${finalpercentage}% ` }} role="progressbar"></div>
      </div>
      <span />
    </div>
  );
};

export { SkillCard };
