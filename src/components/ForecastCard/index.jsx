import React from "react";
import formatDate from "../../helpers/formatDate";
import imageIcon from "../../helpers/icon";
import styles from "./ForecastCard.module.css";

const ForecastCard = ({ infos }) => {
  const { date, minTemp, maxTemp, main, icon } = infos;
  return (
    <div className={styles.card}>
      <h2 className={styles.date}>{formatDate(date)}</h2>
      <div className={styles.icon}>{imageIcon(main, icon)}</div>
      <div className={styles.max}>{Math.floor(maxTemp)}&deg;C</div>
      <span className={styles.min}>{Math.floor(minTemp)}&deg;C</span>
    </div>
  );
};

export default ForecastCard;
