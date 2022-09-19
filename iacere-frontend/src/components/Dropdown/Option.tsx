import React from "react";
import styles from "../Dropdown/dropdown.module.scss";

interface type {
  children: React.ReactNode;
  image?: string;
  onClick?: any;
  dropStyles?: any;
  large?: boolean;
}

export const Option = ({
  children,
  image,
  onClick,
  dropStyles,
  large
}: type) => {
  return (
    <div
      className={large ? styles.drop__large : styles.drop__optionContainer}
      style={dropStyles}
      onClick={onClick}
    >
      <span className={styles.drop__imageLeft}>
        {image && <img src={image} alt="drop-images" />}
      </span>
      <p className={styles.drop__option} aria-hidden>
        {children}
      </p>
      <span className={styles.drop__imageRight}></span>
    </div>
  );
};
