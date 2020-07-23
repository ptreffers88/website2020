import React from "react";

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
          <div className={styles.mask} style={{ height: props.height }}>
            <img src={props.image} alt={props.name} />
          </div>
        </article>
      ) : (
        <article className={styles.macbook}>
          <div className={styles.mask} style={{ height: props.height }}>
            <img src={props.image} alt={props.name} />
          </div>
        </article>
      )}
    </>
  );
};

export { Projectcard };
