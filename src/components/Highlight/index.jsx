import React, { useContext } from "react";
import HighlightCard from "../HighlightCard";
import styles from "./Highlight.module.css";
import app from "./../App.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import PercentageBar from "../PercentageBar";
import { AppContext } from "../../context/appContext";

const Hightlight = () => {
  const { weather, unit } = useContext(AppContext);
  const { humidity, pressure, visibility, wind_speed } = weather.current;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>today's hightlight</h2>
      <div className={styles.content}>
        <HighlightCard
          title="Wind status"
          data={wind_speed}
          unit={unit === "metric" ? "mps" : "mph"}
        >
          <div className={app.flex_row_center}>
            <AiFillPlayCircle />
            <p>WSW</p>
          </div>
        </HighlightCard>
        <HighlightCard title="Humidity" data={humidity} unit="%">
          <PercentageBar percentage={humidity} />
        </HighlightCard>
        <HighlightCard
          title="Visibility"
          data={(visibility * 0.0006213712).toFixed(1)}
          unit="miles"
        />
        <HighlightCard title="Air pressure" data={pressure} unit="mb" />
      </div>
    </section>
  );
};

export default Hightlight;
