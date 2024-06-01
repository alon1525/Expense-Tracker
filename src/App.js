import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [datetime, setDate] = useState("");
  const [description, setDescription] = useState("");


  const addNewTransaction = async (event) => {
    const newTransaction = { name, description, datetime};
    const url = process.env.REACT_APP_CURRENT_DIRECTORY + "/transactions";
    event.preventDefault();
    console.log(url);
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTransaction),
    });
    const result = await response.json();
    setTransactions([...transactions, result]);
    console.log(result);
    setName("")
    setDate("")
    setDescription("")//reseting the transaction form
  };

  return (
    <main>
      <h1>
        400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="name"
            placeholder="Transactions name"
          ></input>
          <input
            type="date"
            value={datetime}
            onChange={(ev) => setDate(ev.target.datetime)}
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
