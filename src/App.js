
import { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionsTable from './components/TransactionsTable';

function App() {

  const [transactions, setTransactions] = useState([
      {
        id: "M8503V",
        index: 1,
        type: "Deposit",
        amount: 3000,
      }
    ]);


  return (
    <div className='container'>
      <div className='d-flex flex-row'>
      <TransactionForm transactions={transactions} setTransactions={setTransactions}/>
      <TransactionsTable transactions={transactions} setTransactions={setTransactions}/>
      </div>
    </div>
  );
}

export default App;
