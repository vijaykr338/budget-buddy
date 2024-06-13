import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import Transaction from './Transaction'

const History = () => {
  const {transactions} = useContext(GlobalContext);
  
  return (
    <div>
      <h1 className='text-2xl'>History</h1>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700'/>
      
      <div className='my-4'>
        {
          transactions.map(transaction => (
           <Transaction key={transaction.id} id={transaction.id} amount={transaction.amount} text={transaction.text}/>
          ))
        }
        
        </div>
      
    </div>
  )
}

export default History
