import React, { useState } from 'react';
import './expenseForm.css';

let control = 'new-expense__control ';
let button = 'new-expense__actions flex-button-container';



const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState( '' );
  const [enteredAmount, setEnteredAmount] = useState( '' );
  const [enteredDate, setEnteredDate] = useState( '' );
  
  const titleChangeHandler = ( event ) => {
    setEnteredTitle( event.target.value );
  }
  const amountChangeHandler = ( event ) => {
    setEnteredAmount( event.target.value );
  }
  const dateChangeHandler = ( event ) => {
  setEnteredDate( event.target.value );
  }
  ///////
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData( expenseData );
    setEnteredTitle( '' );
    setEnteredAmount( '' );
    setEnteredDate( '' );
  }
  
  ////////
  const cancel = <button type="click" onClick={props.OnstopEditing} >Cancel</button>;
  const submit = <button type="submit">Add Expense</button>;
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={control}>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className={control}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className={control}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2050-12-31"  value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className={button}>
          {cancel}
          {submit}
        </div>
      </div>
    </form>
    
  )
};

export default ExpenseForm;