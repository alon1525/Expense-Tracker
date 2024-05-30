import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const TransactionList = ({ transactions }) => {
    const getPriceClass = (price) => {
      if (price > 0) return "price positive";
      if (price < 0) return "price negative";
      return "price zero";
    };
  };

  return (
    <main>
      <h1>
        400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="name"
            placeholder="Transactions name"
          ></input>
          <input
            type="datetime-local"
            value={date}
            onChange={(ev) => setDate(ev.target.date)}
            className="date"
          ></input>
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.description)}
            placeholder="description"
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">Tv i had to buy</div>
          </div>
          <div className="right">
            <button className="close-btn">✕</button>
            <div className="price">$500</div>
            <div className="datetime">05/10/1998</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">Tv i had to buy</div>
          </div>
          <div className="right">
            <button className="close-btn">✕</button>
            <div className="price">$500</div>
            <div className="datetime">05/10/1998</div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
