import { useState } from "react";
import "./App.css";
import AddExpense from "./component/AddExpense/AddExpense";
import Expense from "./component/Cost/Expense";


function App() {
  const expenses = [
    {
      id:1,
      date: new Date(2023, 1, 14),
      title: "Dinner",
      cost: 200,
    },
    {
      id:2,
      date: new Date(2022, 1, 2),
      title: "Travel",
      cost: 4500,
    },
    {
      id:3,
      date: new Date(2022, 1, 26),
      title: "Mobile",
      cost: 70000,
    },
  ];
const [data,setData]=useState(expenses)

const getData=(newdata)=>{
  setData((prevdata)=>{
    return([newdata,...prevdata])
  })

}

  return <div className="Main_Container">
    <AddExpense onAddExpense={getData}/>
    <Expense item={data}/>
    </div>
}

export default App;
