import React, { useState } from "react";
import "./NewExpense.css";

export default function New_Expense(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const ontitlechange = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const onamountchange = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const ondatechange = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      date: new Date(userInput.enteredDate),
      title: userInput.enteredTitle,
      cost: parseInt(userInput.enteredAmount),
    };
    console.log("first", expenseData);

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <>
      <form className="form1">
        <div className="expense-container">
          <h3>ADD EXPENSE</h3>
          <div>
            <input
              type="date"
              value={userInput.enteredDate}
              onChange={ondatechange}
            />
          </div>

          <div>
            <input
              type="text"
              name="expense"
              placeholder="title"
              value={userInput.enteredTitle}
              onChange={ontitlechange}
            ></input>
          </div>

          <div>
            <input
              type="number"
              name="cost"
              min="0"
              placeholder="$"
              value={userInput.enteredAmount}
              onChange={onamountchange}
            ></input>
          </div>

          <div>
            <input
              className="btn"
              type="submit"
              onClick={submitHandler}
            ></input>
          </div>
        </div>
      </form>
    </>
  );
}
