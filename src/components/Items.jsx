import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.wrapper}>
      <ItemCard id={1} name="Apple" price={199} />
    </div>
  );
}

export default Items;
