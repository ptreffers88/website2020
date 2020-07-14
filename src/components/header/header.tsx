import React, { useState, useEffect } from "react";

import { NavbarMenu } from "./navbar-menu/navbar-menu";
import { Logo } from "../logo/logo";

import styles from "./header.module.scss";

const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  const handleShowMenu = (): void => {
    setShowMenu(true);
  };

  const handleCloseMenu = (): void => {
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <NavbarMenu isOpen={showMenu} showMenu={handleCloseMenu} />
      </div>
    </header>
  );
};

export { Header };
