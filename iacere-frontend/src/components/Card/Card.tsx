import React from "react";
import styles from "./card.module.scss";

interface type {
  title: string;
  subtitle: string | number;
}

const Card = ({ title, subtitle }: type) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
