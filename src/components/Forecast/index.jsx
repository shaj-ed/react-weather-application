import React, { useContext, useState } from "react";
import styles from "./Forecast.module.css";
import ForecastCard from "../ForecastCard";
import { AppContext } from "../../context/appContext";

const Forecast = () => {
  const { weather, unit, setUnit } = useContext(AppContext);
  const [celcius, setCelcius] = useState(unit === "metric" ? true : false);

  return (
    <section className={styles.container}>
      <div className={styles.converter}>
        <button
          type="button"
          className={celcius ? `${styles.active}` : null}
          onClick={() => {
            setUnit("metric");
            setCelcius(true);
          }}
        >
          &deg;C
        </button>
        <button
          type="button"
          className={!celcius ? `${styles.active}` : null}
          onClick={() => {
            setUnit("imperial");
            setCelcius(false);
          }}
        >
          &deg;F
        </button>
      </div>
      <div className={styles.wrapper}>
        {weather.daily.slice(1, 6).map((card, index) => {
          const infos = {
            date: card.dt,
            minTemp: card.temp.min,
            maxTemp: card.temp.max,
            main: card.weather[0].main,
            icon: card.weather[0].icon,
          };
          return <ForecastCard key={card.dt} infos={infos} />;
        })}
      </div>
    </section>
  );
};

export default Forecast;
