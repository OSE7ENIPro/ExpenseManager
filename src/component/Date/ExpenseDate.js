import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", {month: "short" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
  return (
    <div className='exp-date'>
        <div className='exp-date-month'>{month}</div>
        <div className='exp-date-day'>{day}</div>
        <div className='exp-date-year'>{year}</div>
    </div>
  )
}
