import React from "react";

import logo from "../../assets/images/HeaderLogo.svg";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.navigation}>
        <span className={styles.navigation_item}>Cities</span>
        <span className={styles.navigation_item}>Properties</span>
        <span className={styles.navigation_item}>Blog</span>
        <span className={styles.navigation_item}>Video</span>
        <span className={styles.navigation_item}>Contacts</span>
      </div>
      <div className={styles.auth}>
        <span className={styles.auth_item}>Log in</span>
        <span>|</span>
        <span className={styles.auth_item}>Sign up</span>
      </div>
    </div>
  );
};

