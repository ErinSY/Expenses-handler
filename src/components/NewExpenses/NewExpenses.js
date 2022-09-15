import React, { useState } from 'react';

import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpense = (props) => {
  const [hideForm, setHideForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <>
      <div className='new-expense'>
        {hideForm ? (
          <ExpensesForm
            onSaveExpenseData={saveExpenseDataHandler}
            onClick={() => setHideForm(!hideForm)}
          />
        ) : (
          <div className='new-expense__actions'>
            <button onClick={() => setHideForm(!hideForm)}>
              Add New Expense
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewExpense;
