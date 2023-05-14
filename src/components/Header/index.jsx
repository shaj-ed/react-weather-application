import React, { useContext, useEffect } from "react";
import styles from "./Header.module.css";
import { MdOutlineModeStandby } from "react-icons/md";
import { AppContext } from "../../context/appContext";

const Header = ({ openSide }) => {
  const { setCity } = useContext(AppContext);

  const getCity = async () => {
    try {
      const res = await fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${
          import.meta.env.VITE_IP_API_KEY
        }`
      );
      const data = await res.json();
      console.log(data.city);
      setCity(data.city);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    getCity();
  };

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.header__button_search}
        onClick={openSide}
      >
        Search for places
      </button>
      <button
        type="button"
        className={styles.header__button_icon}
        onClick={handleClick}
      >
        <MdOutlineModeStandby />
      </button>
    </header>
  );
};

export default Header;
