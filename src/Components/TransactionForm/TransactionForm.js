import React from 'react';
import './TransactionForm.css';

const TransactionForm = () => {
  return (
    <form>
      <div className="basic">
        <input type="text" placeholder={"+200 new samsung TV"}></input>
        <input type="datetime-local"></input>
      </div>
      <div className="description">
        <input type="text" placeholder={"description"}></input>
      </div>
      <button type="submit">Add new transaction</button>
    </form>
  );
};

export default TransactionForm;