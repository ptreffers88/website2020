import React from "react";

import { NavbarItem } from "../../navbar-item/navbar-item";
import { Logo } from "../../logo/logo";
import { ScrollTo } from "../../../utils/scrollTo";

import styles from "./navbar-menu.module.scss";

export interface INavbarMenuProps {
  isOpen: boolean;
  showMenu: () => void;
}

const NavbarMenu = (props: INavbarMenuProps) => {
  const handleContactClick = () => {
    if (props.showMenu) {
      props.showMenu();
    }
    ScrollTo("bottom");
  };

  return (
    <div className={`${styles.menu}  ${props.isOpen && styles.menuOpen}`}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo onClick={props.showMenu} />
          <div className={styles.close} onClick={props.showMenu}>
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
        <div className={styles.menuItems}>
          <NavbarItem title="Mijn werk" link="/projects/" onClick={props.showMenu} />
          <NavbarItem title="Webbio" link="/projects/webbio" onClick={props.showMenu} variant="secondary" />
          <NavbarItem
            title="Kentaa online fundrasing"
            link="/projects/kentaa"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem
            title="Helder Private Lease"
            link="/projects/helder-private-lease"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem
            title="Autobedrijf Scholten"
            link="/projects/autobedrijf-scholten"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem title="Contact" link="/" onClick={handleContactClick} scrollToAnchorLink />
          <NavbarItem
            title="Github"
            link="https://github.com/ptreffers88"
            onClick={props.showMenu}
            variant="secondary"
            isExternalLink
          />
          <NavbarItem
            title="LinkedIn"
            link="https://www.linkedin.com/in/ptreffers88/"
            onClick={props.showMenu}
            variant="secondary"
            isExternalLink
          />
        </div>
      </div>
    </div>
  );
};

export { NavbarMenu };
