import { useState } from 'react'
import ExpenseTracker from './components/ExpenseTracker'
import { GlobalProvider } from './components/context/GlobalState'

function App() {
  
  return (
    <GlobalProvider className='my-9'>
      <ExpenseTracker></ExpenseTracker>
    </GlobalProvider>
  )
}

export default App
