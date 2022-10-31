import React, { useRef, useState } from "react";
import Input from "../../ui/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValids] = useState(true);
  const amountRefInput = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRefInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValids(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountRefInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>enter a valid number , it must be 1-5</p>}
    </form>
  );
};

export default MealItemForm;
