import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filtered = props.items.filter(
    (item) => item.date.getFullYear() === filteredYear - 0
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 조건부렌더링, 데이터가 없을경우 */}
        <ExpensesList data={filtered}  />
      </Card>
    </div>
  );
};

export default Expenses;
