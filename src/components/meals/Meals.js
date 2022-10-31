import React, { Fragment } from "react";
import AvailableMeals from "../meals/AvailableMeals";
import MealsSummary from "../meals/MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
