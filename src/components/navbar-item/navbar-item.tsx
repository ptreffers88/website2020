import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { ScrollTo } from "../../utils/scrollTo";

import styles from "./navbar-item.module.scss";

export interface INavbarItemProps {
  link: string;
  title: string;
  variant?: ITypeVariant;
  onClick?: () => void;
  isExternalLink?: boolean;
  scrollToAnchorLink?: boolean;
}

type ITypeVariant = "primary" | "secondary";

const NavbarItem = (props: INavbarItemProps) => {
  const handleClick = (): void => {
    ScrollTo("top");
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      {props.scrollToAnchorLink ? (
        <span className={`${styles.link} ${getMenuItemVariant(props.variant || "primary")}`} onClick={handleClick}>
          {props.title}
        </span>
      ) : props.isExternalLink ? (
        <a
          className={`${styles.link} ${getMenuItemVariant(props.variant || "primary")}`}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {props.title}
        </a>
      ) : (
        <Link
          className={`${styles.link} ${getMenuItemVariant(props.variant || "primary")}`}
          to={props.link}
          onClick={handleClick}
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
