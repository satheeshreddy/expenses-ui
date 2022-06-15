import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (expenseInput) => {
    const newExpense = {
      ...expenseInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
    setIsEditing(false);
  };

  const startEditHandler = () => {
    setIsEditing(true);
  };
  const cancelEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseInput={saveExpenseHandler}
          onCancel={cancelEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
