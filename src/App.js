import React, { useState } from 'react';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const TransactionList = ({ transactions }) => {
    const getPriceClass = (price) => {
      if (price > 0) return 'price positive';
      if (price < 0) return 'price negative';
      return 'price zero';
    };

  return (
    <main>
      <h1>400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type='text' className='name' placeholder='Transactions name'></input>
          <input type='datetime-local' className='date'></input>
        </div>
        <div className='description'>
          <input type='text' placeholder='Description'></input>
        </div>
        <button type='submit'>Add</button>
      </form>
      <div className="transactions">
      {transactions.map((transaction, index) => (
        <div className="transaction" key={index}>
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="right">
            <div className={getPriceClass(transaction.price)}>
              {transaction.price > 0 ? `+$${transaction.price}` : `$${transaction.price}`}
            </div>
            <div className="datetime">{transaction.datetime}</div>
          </div>
        </div>
      ))}
      </div>
    </main>
  );
}

export default App;

