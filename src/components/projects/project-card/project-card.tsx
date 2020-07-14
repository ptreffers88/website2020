import React from "react";
import { ReactSVG } from "react-svg";

import imageMacbook from "../../../assets/img/macbook.svg";
import imageIphone from "../../../assets/img/iphone.svg";
import imageIphoneTopbar from "../../../assets/img/iphone-topbar.svg";

import styles from "./project-card.module.scss";

export interface IProjectcardProps {
  image: string;
  name: string;
  variant?: "macbook" | "iphone";
  size?: string;
}

const Projectcard = (props: IProjectcardProps) => {
  // const projectNameUrl = props.name.toLocaleLowerCase().replace(/ /g, "-");
  return (
    <>
      {props.variant === "iphone" ? (
        <article className={styles.iphone} style={{ width: props.size }}>
          <ReactSVG className={styles.imageTopbar} src={imageIphoneTopbar} />
          <div className={styles.mask}>
            <img src={props.image} alt={props.name} />
          </div>
          <ReactSVG className={styles.imageIphone} src={imageIphone} />
        </article>
      ) : (
        <article className={styles.macbook} style={{ width: props.size }}>
          <div className={styles.mask}>
            <img src={props.image} alt={props.name} />
          </div>
          <ReactSVG src={imageMacbook} />
        </article>
      )}
    </>
  );
};

export { Projectcard };
