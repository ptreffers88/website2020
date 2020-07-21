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
  height?: string;
}

const Projectcard = (props: IProjectcardProps) => {
  return (
    <>
      {props.variant === "iphone" ? (
        <article className={styles.iphone}>
          <ReactSVG className={styles.imageTopbar} src={imageIphoneTopbar} />
          <div className={styles.mask} style={{ height: props.height }}>
            <img src={props.image} alt={props.name} />
          </div>
          <ReactSVG className={styles.imageIphone} src={imageIphone} />
        </article>
      ) : (
        <article className={styles.macbook}>
          <div className={styles.mask} style={{ height: props.height }}>
            <img src={props.image} alt={props.name} />
          </div>
          <ReactSVG src={imageMacbook} />
        </article>
      )}
    </>
  );
};

export { Projectcard };
