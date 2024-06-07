import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [price, setPrice] = useState("");
  //const [description, setDescription] = useState("");
  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);
  const getTransactions = async () => {
    const url = process.env.REACT_APP_CURRENT_DIRECTORY + "/transactions";
    const response = await fetch(url);
    return await response.json();
  };

  const deleteTransaction = async (id) => {
    try {
      const url = process.env.REACT_APP_CURRENT_DIRECTORY + "/transactions";
      await fetch(url, {
        method: "DELETE",
        body: id,
      });
      await setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
      getTransactions().then((transactions) => {
        setTransactions(transactions);
      });
    } catch (error) {
      console.error("Error deleting transaction: ", error);
    }
  };

  const addNewTransaction = async (event) => {
    const newTransaction = { name, price, datetime };
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
      getTransactions().then((transactions) => {
        setTransactions(transactions);
      });
      // Reset form fields
      setName("");
      setDatetime("");
      //setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  };

  const formatDate = (datetime) => {
    return new Date(datetime).toLocaleDateString(); // Format the datetime string to a date-only string
  };

  var balance = 0;
  for (const transaction of transactions) {
    balance += transaction.price;
  }
  const [dolars, cents] = balance.toFixed(2).split(".");

  return (
    <main>
      <h1>
        ₪{dolars}
        <span>.{cents}</span>
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
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
              </div>
              <div className="right">
                <button
                  className="close-btn"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  ✕
                </button>
                <div
                  className={
                    "price " + (transaction.price > 0 ? "positive" : "negative")
                  }
                >
                  ₪{transaction.price}
                </div>
                <div className="datetime">
                  {formatDate(transaction.datetime)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
export default App;
