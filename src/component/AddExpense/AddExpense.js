import React from 'react'
import NewExpense from '../NewExpense/NewExpense'
import './AddExpense.css'

export default function Add_Expense(props) {
  
  
  const ExpenseHandler =(expenseData)=>{
    const NewExpenseData = {
        ...expenseData,
        id : Math.random(),
    }
    console.log("from new expense "+ expenseData);
    props.onAddExpense(NewExpenseData)
  }



  return (
        <NewExpense onSaveExpenseData={ExpenseHandler}/>
  )
}
