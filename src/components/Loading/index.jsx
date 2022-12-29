import React from "react";
import styles from "./Loading.module.css";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <ReactLoading
      className={styles.loading}
      type="bubbles"
      color="#eee"
      width={200}
      height="100%"
    />
  );
};

export default Loading;
