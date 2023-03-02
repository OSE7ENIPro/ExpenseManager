import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

export default function Chart(props) {

  const dataPointValues = props.MonthlyExpenseList.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  
  return (
    <div className="chart-container">
      {props.MonthlyExpenseList.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
