import React, { useState } from "react";

import { NavbarMenu } from "./navbar-menu/navbar-menu";
import { Logo } from "../logo/logo";

import styles from "./header.module.scss";

const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = (): void => {
    setShowMenu(true);
  };

  const handleCloseMenu = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMenu(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.hamburger} onClick={handleShowMenu}>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </div>
        {showMenu && <NavbarMenu isOpen={showMenu} showMenu={handleCloseMenu} />}
      </div>
    </header>
  );
};

export { Header };
