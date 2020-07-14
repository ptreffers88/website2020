import React from "react";

import styles from "./navbar-item.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export interface INavbarItemProps {
  link: string;
  title: string;
  variant?: ITypeVariant;
  onClick?: () => void;
  isExternalLink?: boolean;
}

type ITypeVariant = "primary" | "secondary";

const NavbarItem = (props: INavbarItemProps) => {
  return (
    <>
      {props.isExternalLink ? (
        <a
          className={`${styles.link} ${getMenuItemVariant(props.variant || "primary")}`}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
        >
          {props.title}
        </a>
      ) : (
        <Link
          className={`${styles.link} ${getMenuItemVariant(props.variant || "primary")}`}
          to={props.link}
          onClick={props.onClick}
        >
          {props.title}
        </Link>
      )}
    </>
  );
};

const getMenuItemVariant = (variant: ITypeVariant) =>
  clsx(variant === "primary" && styles.primary, variant === "secondary" && styles.secondary);

export { NavbarItem };
