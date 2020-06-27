import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import styles from "./header.module.scss";

export interface IHeaderProps {
  logo: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <ReactSVG src={props.logo} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
