import React, { useContext, useEffect } from "react";
import styles from "./Header.module.css";
import { MdOutlineModeStandby } from "react-icons/md";
import { AppContext } from "../../context/appContext";
import useFetch from "../../Hooks/useFetch";

const Header = ({ openSide }) => {
  const { setCity } = useContext(AppContext);

  const { error, data } = useFetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${
      import.meta.env.VITE_IP_API_KEY
    }`
  );

  const handleClick = () => {
    error ? setCity("london") : setCity(data.city);
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
        onClick={() => handleClick()}
      >
        <MdOutlineModeStandby />
      </button>
    </header>
  );
};

export default Header;
