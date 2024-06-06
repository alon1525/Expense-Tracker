import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import Transaction from "./models/Transaction.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
    res.json('test ok');
});

app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const {name,datetime,price} = req.body;
    const transaction = await Transaction.create({name, datetime, price});
    res.json(transaction); // Simulate saving to the database and returning the saved transaction
});

app.get('/api/transactions', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transaction = await Transaction.find();
    res.json(transaction);
});

app.listen(port, (req, res) => {
    console.log('listening on port 4000');
});