import React from 'react';
import './expenseList.css';
import ExpenseItem from '../Expenses/ExpenseItem';
const ExpenseList = ( props ) => {
//////////65 conditional Content//////
  if ( props.filteredItems.length === 0 ) {
    return <h2 className="expense-list__fallback">No Expenses Found</h2>
  }

  return (
    <ul className="expense-list">
      {
        props.filteredItems.map( ( expense ) => 
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        )  
      }
    </ul>
    
  )
};

export default ExpenseList;