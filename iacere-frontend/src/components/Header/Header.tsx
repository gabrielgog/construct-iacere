import React from "react";
import { useLocation } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import styles from "./header.module.scss";

const Header = () => {
  const location = useLocation();
  const headerTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/projects":
        return "Projects";
      case "/users":
        return "Users";
      default:
        return "";
    }
  };
  return (
    <header className={styles.header}>
      <div>
        <h2 className={styles.header__title}>{headerTitle()}</h2>
        <div className={styles.user}>
          <p className={styles.user__name}>Gabriel Godwin</p>
          <p className={styles.user__role}>Admin</p>
          <div>
            <Avatar name="Gabriel Godwin" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
