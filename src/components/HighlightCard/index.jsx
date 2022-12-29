import React from "react";
import styles from "./HighlightCard.module.css";

const HighlightCard = ({ children, title, data, unit }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.data}>
        {data}
        <span> {unit}</span>
      </h4>
      {children}
    </article>
  );
};

export default HighlightCard;
