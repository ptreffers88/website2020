import React from "react";

import styles from "./navbar-item.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export interface INavbarItemProps {
  link: string;
  title: string;
  variant?: ITypeVariant;
  onClick?: () => void;
}

type ITypeVariant = "primary" | "secondary";

const NavbarItem = (props: INavbarItemProps) => {
  return (
    <Link
      className={`${styles.link} ${getMenuItemVariant(props.variant || "primary")}`}
      to={props.link}
      onClick={props.onClick}
    >
      {props.title}
    </Link>
  );
};

const getMenuItemVariant = (variant: ITypeVariant) =>
  clsx(variant === "primary" && styles.primary, variant === "secondary" && styles.secondary);

export { NavbarItem };
