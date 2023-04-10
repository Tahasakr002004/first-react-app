import React,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseChart from './ExpensesChart';

export default function Expenses ( props ) {

  const [filteredYear, setFilteredYear] = useState( '2020' );
  
  const changeExpenseYear = ( year ) => {
    setFilteredYear( year );
  }

  const filteredExpenses = props.expenses.filter( el => {
    return el.date.getFullYear().toString() === filteredYear;
  } );
  
  return (
    
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={changeExpenseYear}/>
        <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList filteredItems={filteredExpenses} />
    </Card>
    
    
  )
}