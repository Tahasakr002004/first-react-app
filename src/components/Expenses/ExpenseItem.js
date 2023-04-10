import React, { useState } from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem ( props ) {
  const [title] = useState( props.title );
  
  return (
        <div className="expense-item">
         <ExpenseDate date={props.date}></ExpenseDate>
          <div className="expense-item__description">
            <h2>{title}!</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </div>
  );
}
