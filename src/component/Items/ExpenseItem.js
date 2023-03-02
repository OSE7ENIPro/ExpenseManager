import React from 'react'
import './ExpenseItem.css'
import {useState} from 'react'
import Card from '../../UI/Card/Card';
import ExpenseDate from '../Date/ExpenseDate';



export default function ExpenseItem(props) {
    const [title,setTitle] = useState(props.title);
    function handler(){
        setTitle('Updated !')
    }
  return (
   <Card className='exp-item'>
          <div className='exp-item-date'>
            <h2><ExpenseDate date={props.date}/></h2>
        </div>
        <div className='exp-item-title'>
            <h2>{props.title}</h2>
        </div>
        <div className='exp-item-cost'>
            <h2>{props.cost}</h2>
        </div>
        <div >
            <input className='exp-item-edit' type='button' value='edit' onClick={handler} ></input>
        </div>
   </Card>
  )
}
