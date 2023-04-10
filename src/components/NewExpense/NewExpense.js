import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';

let button_center = 'button-center';
const NewExpense = ( props ) => {
  const [isEditing, setIsEditing] = useState( false );
  //////
  const saveExpenseDataHandler = ( enteredExpenseData ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense( expenseData );
    setIsEditing( false );
  };
  /////
  const startEditingHandler = () => {
    setIsEditing( true );
    
  };

  const stopEditingHandler = () => {
    setIsEditing( false );
    console.log( 'canceled' );
    
  };

  return (
    <div className="new-expense">
      {!isEditing && <button className={button_center} onClick={startEditingHandler}> Add New Expense</button>}
      {isEditing && < ExpenseForm onSaveExpenseData={saveExpenseDataHandler} OnstopEditing={stopEditingHandler} />}
    </div>
  )
};

export default NewExpense;