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
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    if (props.showMenu) {
      props.showMenu();
    }
  };

  const handlePortfolioClick = () => {
    // window.scrollTo({ top: document.body.getElementById("portfolio"), behavior: "smooth" });
    window.scrollTo({ top: 1350, behavior: "smooth" });
    if (props.showMenu) {
      props.showMenu();
    }
  };

  return (
    <div className={`${styles.menu}  ${props.isOpen && styles.menuOpen}`}>
      <div className={styles.header}>
        <Logo onClick={props.showMenu} />
        <div className={styles.close} onClick={props.showMenu}>
          <span className={styles.bar} />
          <span className={styles.bar} />
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavbarItem title="Portfolio" link="" onClick={handlePortfolioClick} />
        <NavbarItem
          title="Kentaa"
          link="/portfolio/helder-private-lease"
          onClick={props.showMenu}
          variant="secondary"
        />
        <NavbarItem
          title="Autobedrijf Scholten"
          link="/portfolio/helder-private-lease"
          onClick={props.showMenu}
          variant="secondary"
        />
        <NavbarItem
          title="Reinders Rekreatie"
          link="/portfolio/helder-private-lease"
          onClick={props.showMenu}
          variant="secondary"
        />
        <NavbarItem
          title="Helder"
          link="/portfolio/helder-private-lease"
          onClick={props.showMenu}
          variant="secondary"
        />
        <NavbarItem title="Contact" link="" onClick={handleContactClick} />
      </div>
    </div>
  );
};

export { NavbarMenu };
