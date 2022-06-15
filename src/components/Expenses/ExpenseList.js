import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
