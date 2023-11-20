import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {

  const {item, total, clear, toggle} = useValue();

  console.log(styles.container)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={toggle}>
          Cart
        </button>
        <button className={styles.button} onClick={()=> clear()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
