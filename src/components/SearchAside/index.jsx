import React, { useContext, useState } from "react";
import styles from "./SearchAside.module.css";
import { RxCross2 } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { AppContext } from "../../context/appContext";

const SearchAside = ({ open, hideSide }) => {
  const { setCity } = useContext(AppContext);
  const [searchCity, setSearchCity] = useState("");

  return (
    <div
      className={
        open ? `${styles.search} ${styles.search_open}` : `${styles.search}`
      }
    >
      <button type="button" className={styles.hide_button} onClick={hideSide}>
        <RxCross2 />
      </button>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setCity(searchCity);
        }}
      >
        <label className={styles.label}>
          <BiSearchAlt2 />
          <input
            type="text"
            className={styles.input}
            placeholder="search location"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.button}>
          search
        </button>
      </form>

      <ul className={styles.city_list}>
        <li className={styles.city_name} onClick={() => setCity("london")}>
          <p>london</p>
          <IoIosArrowForward />
        </li>
        <li className={styles.city_name} onClick={() => setCity("barcelona")}>
          <p>barcelone</p>
          <IoIosArrowForward />
        </li>
        <li className={styles.city_name} onClick={() => setCity("long-beach")}>
          <p>long beach</p>
          <IoIosArrowForward />
        </li>
      </ul>
    </div>
  );
};

export default SearchAside;
