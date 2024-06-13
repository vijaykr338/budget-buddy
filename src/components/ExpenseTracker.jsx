import React from 'react'
import Balance from './Balance'
import Incomexp from './Incomexp'
import History from './History'
import Adder from './Adder'


const ExpenseTracker = () => {
  return (
    <div className='flex justify-center text-black'>
        <div className='bg-white w-1/3 px-4'> 
            <h1 className='font-customFont text-5xl my-4 text-black' >Expense Tracker</h1>
            <Balance></Balance>
            <Incomexp/>
            <History/>
            <Adder/>
            </div>

    </div>
  )
}

export default ExpenseTracker
