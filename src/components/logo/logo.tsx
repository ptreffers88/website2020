import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import LOGO from "../../assets/img/logo.svg";
import styles from "./logo.module.scss";

export interface ILogoProps {
  onClick?: () => void;
}

const Logo = (props: ILogoProps): JSX.Element => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
