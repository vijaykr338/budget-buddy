import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const Incomexp = () => {
  const {transactions} = useContext(GlobalContext);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const amounts  = transactions.map(transaction => transaction.amount);



  const updated = amounts.filter(amount => amount > 0).reduce((acc, item) => acc += item, 0).toFixed(2);
  //so this line below is causing infinite render because everytime the component 
  //renders it causes pain and misery or aka infinite re-renders, so use useEffect() hook
  
  const updatedexp = amounts.filter(amount => amount < 0).reduce((acc, item)=> (acc+=item), 0).toFixed(2);
  
  
  useEffect(()=>{
    setIncome(updated)
    setExpense(updatedexp);
  }, [updated, updatedexp])
  return (
    
      <div className='border-solid border-black border-2 rounded-lg flex justify-between mx-4 my-4 '>
        <div className='mx-2'>
            <h1>Income</h1>
            <p className='text-green-700 text-3xl '>${income}</p>
        </div>
        <div className='mx-2'>
            <h1>Expense</h1>
            <p className='text-red-700 text-3xl'>${expense}</p>
        </div>

      </div>
  )
}

export default Incomexp
