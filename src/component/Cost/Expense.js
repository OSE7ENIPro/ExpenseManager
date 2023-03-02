import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseChart from "../Chart/ExpenseChart";
import ExpenseItem from "../Items/ExpenseItem";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";

export default function Expense(props) {
  const [year, setYear] = useState("2022");

  const selectedyearbyuser = (selectedyear) => {
    console.log("From state " + selectedyear);
    setYear(selectedyear);
  };

  const filterdlist = props.item.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <>
      <ExpenseChart item={filterdlist} />
     
      <Card className="expenses">
        <ExpenseFilter selected={year} onfilterchange={selectedyearbyuser} />
        {filterdlist.length === 0 ? (
          <p>NO Expenses Found </p>
        ) : (
          filterdlist.map((obj) => (
            <ExpenseItem
              id={obj.id}
              title={obj.title}
              cost={obj.cost}
              date={obj.date}
            />
          ))
        )}
      </Card>
    </>
  );
}
