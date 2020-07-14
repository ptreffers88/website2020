import React from "react";

import { NavbarItem } from "../../navbar-item/navbar-item";
import styles from "./navbar-menu.module.scss";
import { Logo } from "../../logo/logo";

export interface INavbarMenuProps {
  isOpen: boolean;
  showMenu: () => void;
}

const NavbarMenu = (props: INavbarMenuProps) => {
  const handleContactClick = () => {
    if (props.showMenu) {
      props.showMenu();
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
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
          <NavbarItem title="Projecten" link="/projects/" onClick={props.showMenu} />
          <NavbarItem
            title="Kentaa"
            link="/projects/helder-private-lease"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem
            title="Autobedrijf Scholten"
            link="/projects/helder-private-lease"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem
            title="Reinders Rekreatie"
            link="/projects/helder-private-lease"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem
            title="Helder"
            link="/projects/helder-private-lease"
            onClick={props.showMenu}
            variant="secondary"
          />
          <NavbarItem title="Contact" link="" onClick={handleContactClick} />
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
