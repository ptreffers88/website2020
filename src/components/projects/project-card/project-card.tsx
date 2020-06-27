import React from "react";
import { ReactSVG } from "react-svg";

import imageMacbook from "../../../assets/img/macbook.svg";

import styles from "./project-card.module.scss";

export interface IProjectcardProps {
  image: string;
  name: string;
}

const Projectcard = (props: IProjectcardProps) => {
  // const projectNameUrl = props.name.toLocaleLowerCase().replace(/ /g, "-");
  return (
    <article className={styles.macbook}>
      <div className={styles.mask}>
        <img src={props.image} alt={props.name} />
      </div>
      <ReactSVG src={imageMacbook} />
    </article>
  );
};

export { Projectcard };
