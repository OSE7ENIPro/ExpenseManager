import React, { useState } from "react";
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {
const[year,setYear]=useState('2022');
   

    const onyearselect=(event)=>{
       setYear(event.target.value);
        props.onfilterchange(event.target.value);
    }


  return (
    <div className="filter-by-year">
      <label for="year">Choose a year  </label>
      <select name="selected-year" value={year} onChange={onyearselect}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}
