import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import Forecast from "../Forecast";
import Hightlight from "../Highlight";
import styles from "./Content.module.css";
import Loading from "../Loading";

const Content = () => {
  const { loading, error } = useContext(AppContext);

  if (loading) {
    return (
      <main className={styles.main}>
        <Loading />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Forecast />
        <Hightlight />
      </div>
      <p className={styles.footer_text}>
        created by
        <a href="#" className={styles.username}>
          username
        </a>
        - <a href="#">devChallenges.io</a>
      </p>
    </main>
  );
};

export default Content;
