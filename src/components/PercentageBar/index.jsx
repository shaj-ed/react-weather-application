import React from "react";
import styles from "./PercentageBar.module.css";

const PercentageBar = ({ percentage }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
      <span className={styles.zero}>0</span>
      <span className={styles.percentage}>{percentage}</span>
      <span className={styles.hundred}>100</span>
      <span className={styles.percent_sign}>%</span>
    </div>
  );
};

export default PercentageBar;
