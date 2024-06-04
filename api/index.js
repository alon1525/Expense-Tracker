import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import Transaction from "models/Transaction.js";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
    res.json('test ok');
});

app.post('/api/transaction', (req, res) => {
    mongoose.connect('transaction')
    const {name,description,datetime} = req.body;
    res.json(req.body); // Simulate saving to the database and returning the saved transaction
});

app.listen(port, (req, res) => {
    console.log('listening on port 4000');
});