import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'


const Balance = () => {
  
  const { transactions } = useContext(GlobalContext);
 
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts)
  const total = amounts.reduce((acc, item)=>(acc+=item), 0).toFixed(2)

  //always keep in mind when you have an array, loop over each item using map function, if you wanna add those values then 
  //go ahead and use reduce(), and when you want to get it displayed, just use a li function

  return (
    <div>
        <h1>Your Balance</h1>
        <h1 className='text-4xl'>${total}</h1>
    </div>
  )
}

export default Balance
