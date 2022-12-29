import Aside from "./Aside";
import Content from "./Content";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <>
        <Aside />
        <Content />
      </>
    </div>
  );
};

export default App;
