import React from "react";
import { NavLink } from "react-router-dom";
import navlinks from "config/navlink";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {navlinks.map((link, index) => {
        return (
          <div className={styles.menu} key={index}>
            <NavLink
              to={link.url}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <nav className={styles.menu__link}>
                <span>{link.title}</span>
              </nav>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
