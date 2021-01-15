import React from "react";

import styles from "./hero.module.scss";

export interface IHeroProps {
  image: string;
}

const Hero = (props: IHeroProps): JSX.Element => {

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <div className={styles.image}data-sal="fade" data-sal-duration="750" data-sal-delay="700">
          <img src={props.image} alt="Foto Paul" width="640px" height="707px" />
        </div>
      </div>
      <div className={styles.info} data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">
        <h1>Paul Treffers</h1>
        <h2>Front-end Developer</h2>
        <h3>Flexibel | Perfectionistisch | Loyaal</h3>
      </div>
    </section>
  );
};

export { Hero };
