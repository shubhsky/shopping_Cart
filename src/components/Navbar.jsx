import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../itemContext";

function Navbar() {

  const value = useContext(itemContext)

  console.log(styles.container)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
    </div>
  );
}

export default Navbar;
