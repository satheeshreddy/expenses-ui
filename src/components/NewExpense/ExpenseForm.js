import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseInput, setExpenseInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setExpenseInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setExpenseInput((prevState) => {
      return {
        ...prevState,
        amount: +event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setExpenseInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseInput({
      ...expenseInput,
      date: new Date(expenseInput.date),
    });
    setExpenseInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={expenseInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={expenseInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
