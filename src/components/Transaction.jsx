import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

const Transaction = ({text, amount, id}) => {

    const { deleteTransaction} = useContext(GlobalContext)

  return (
    <li style={{ borderRight: `4px solid ${ amount > 0 ? 'green': 'red'}` }} className='relative group px-3 py-3 text-xl list-none border-2 flex justify-between border-black my-2 '>
      <span>{text}</span> 
      <span className='mx-5'>{amount > 0 ? '':'-'}${Math.abs(amount)}</span>
      <button className='absolute top-0 right-0 m-2 opacity-0 group-hover:opacity-100' onClick={()=>deleteTransaction(id)}>X</button>
    </li>
  )
}

export default Transaction