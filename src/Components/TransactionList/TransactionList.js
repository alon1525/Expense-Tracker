import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions }) => {
  const getPriceClass = (price) => {
    if (price > 0) return 'price positive';
    if (price < 0) return 'price negative';
    return 'price zero';
  };

  return (
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
  );
};

export default TransactionList;
