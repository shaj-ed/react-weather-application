import React, { useContext } from "react";
import styles from "./AsideContent.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AppContext } from "../../context/appContext";
import imageIcon from "../../helpers/icon";
import formatDate from "../../helpers/formatDate";

const AsideContent = () => {
  const { city, weather } = useContext(AppContext);
  const { dt, temp, weather: main } = weather.current;

  return (
    <div className={styles.content}>
      <div className={styles.weather_icon}>
        {imageIcon(main[0].main, main[0].icon)}
      </div>
      <h1 className={styles.temparature}>
        {Math.floor(temp)}
        <span>&deg;c</span>
      </h1>
      <h3 className={styles.about}>{main[0].main}</h3>
      <div className={styles.date}>
        <p className={styles.today}>today</p>
        <p className={styles.full_date}>{formatDate(dt)} </p>
      </div>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        <span>{city}</span>
      </p>
    </div>
  );
};

export default AsideContent;
