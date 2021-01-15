import React, { useState, useEffect } from "react";

import { isInViewport } from "../../../../utils/isInViewport";

import styles from "./skill-card.module.scss";

export interface ISkillCardProps {
  name: string;
  percentage: number;
}

const SkillCard = (props: ISkillCardProps): JSX.Element => {
  const [finalpercentage, setFinalpercentage] = useState<number>(0);

  useEffect(() => {
    const setProgress = (): void => {
      let elem = document.querySelector("#progress");
      if (elem && isInViewport(elem)) {
        setFinalpercentage(props.percentage);
      }
    };

    window.addEventListener("scroll", setProgress);

    return (): void => {
      window.removeEventListener("resize", setProgress);
    };
  }, [props.percentage]);

  return (
    <div className={styles.skill} data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">
      <h3 className={styles.name}>{props.name}</h3>
      <div className={styles.progress} id="progress">
        <div className={styles.progressMeter} style={{ width: `${finalpercentage}% ` }} role="progressbar"></div>
      </div>
    </div>
  );
};

export { SkillCard };
