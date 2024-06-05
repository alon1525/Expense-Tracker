import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [price, setPrice] = useState("");
  //const [description, setDescription] = useState("");


  const addNewTransaction = async (event) => {
    const newTransaction = { name,price, datetime};
    const url = process.env.REACT_APP_CURRENT_DIRECTORY + "/transaction";
    event.preventDefault();
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });
      const result = await response.json();
      setTransactions([...transactions, result]);
      console.log("Transaction added: ", result);
      
      // Reset form fields
      setName("");
      setDatetime("");
      //setDescription("");
      setPrice("");
    }
    catch (error) {
      console.error("Error adding transaction: ", error);
    }
}
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
            onChange={(ev) => setDatetime(ev.target.value)}
            className="date"
          ></input>
        </div>
        <div className="price">
          <input
            type="number"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            placeholder="Price"
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
