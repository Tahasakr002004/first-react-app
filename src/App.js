import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date( 2022, 7, 14 ),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date( 2021, 2, 12 ) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date( 2020, 2, 28 ),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date( 2019, 5, 12 ),
  },
     {
      id: 'e5',
      title: 'New Jercy',
      amount: 600,
      date: new Date( 2021, 6, 12 ),
    },
  ];
function App () {
  const [addedExpenses, setAddedExpenses] = useState( DUMMY_EXPENSES );
  
  const addExpenseDataHandler = ( expense ) => {
    setAddedExpenses( ( previousState ) => {
      previousState.unshift( expense );
      return [...previousState];
    })  
  }
  
  // console.log( addedExpenses );
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>
      <Expenses  expenses={addedExpenses}/>
     
    </div>
  );
}

export default App;
