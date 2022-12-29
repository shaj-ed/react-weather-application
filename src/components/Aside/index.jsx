import React, { useContext, useState } from "react";
import styles from "./Aside.module.css";
import Header from "../Header";
import AsideContent from "../AsideContent";
import SearchAside from "../SearchAside";
import { AppContext } from "../../context/appContext";
import Loading from "../Loading";

const Aside = () => {
  const [open, setOpen] = useState(false);
  const { loading, error } = useContext(AppContext);

  const openSide = () => {
    setOpen(true);
  };

  const hideSide = () => {
    setOpen(false);
  };

  if (loading) {
    return (
      <aside className={styles.aside}>
        <Loading />
      </aside>
    );
  }

  return (
    <aside className={styles.aside}>
      <Header openSide={openSide} />
      <AsideContent />
      <SearchAside open={open} hideSide={hideSide} />
    </aside>
  );
};

export default Aside;
