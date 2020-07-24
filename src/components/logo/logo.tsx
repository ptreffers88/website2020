import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import LOGO from "../../assets/img/logo.svg";
import { ScrollTo } from "../../utils/scrollTo";

import styles from "./logo.module.scss";

export interface ILogoProps {
  onClick?: () => void;
}

const Logo = (props: ILogoProps): JSX.Element => {
  const handleClick = () => {
    ScrollTo("top");
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <Link className={styles.logo} to="/" onClick={handleClick}>
      <ReactSVG src={LOGO} />
    </Link>
  );
};

export { Logo };
