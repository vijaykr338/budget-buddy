import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
const Adder = () => {

  const {addTransaction} = useContext(GlobalContext)
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
      
    }

    addTransaction(newTransaction)
    
    setText('')
    setAmount('')
  }
  

  return (
    <div className=''>
      <h1 className='text-xl'>Add New Transaction</h1>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700'/>

      <form onSubmit={onSubmitHandler}>
      <h1>Task</h1>
      <input 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      type="text" 
      placeholder="Task Name"
      className="my-4 input input-bordered w-full max-w-xs bg-white text-black" 
      
       />
      <h1>Amount</h1>
      <h1>(negative amount is expense) </h1>

      <input 
      value={amount} 
      onChange={(e)=>setAmount(e.target.value)} 
      type="text" 
      placeholder="Amount" 
      className="my-4 input input-bordered w-full max-w-xs bg-white text-black"
       />
      <button type='submit' className="btn btn-wide my-3" onClick={onSubmitHandler}>Submit</button>
      </form>

    </div>
  )
}

export default Adder
