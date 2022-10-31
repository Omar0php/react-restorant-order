import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealsItem.module.css";
import CartContext from "../../../store/Cart-Context";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCardHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCardHandler} />
      </div>
    </li>
  );
};

export default MealsItem;