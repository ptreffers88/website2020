import React from "react";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export interface IHeaderProps {
  logo: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <Link to="/">
            <object data={props.logo} type="image/svg+xml" aria-label=""></object>
          </Link>
        </span>
      </div>
    </header>
  );
};

export { Header };
