import React from "react";
import clsx from "clsx";

import styles from "./section.module.scss";

export interface ISectionProps {
  title?: string;
  children?: any;
  size?: ISectionSize;
  background: ISectionBackground;
}

type ISectionSize = "medium" | "fullWidth";
type ISectionBackground = "light" | "darker" | "darkest";

const Section = (props: ISectionProps) => {
  return (
    <div className={`${styles.section} ${styles.gutterStandard} ${getStyleBackground(props.background)}`}>
      <div className={getSizeContainer(props.size || "medium")}>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};

const getSizeContainer = (size: ISectionSize) =>
  clsx(size === "medium" && styles.containerMedium, size === "fullWidth" && styles.containerFullWidth);

const getStyleBackground = (background: ISectionBackground) =>
  clsx(
    background === "light" && styles.lightBack,
    background === "darker" && styles.darkerBack,
    background === "darkest" && styles.darkestBack
  );

export { Section };
