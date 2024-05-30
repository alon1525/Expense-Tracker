import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
    res.json('test ok');
});

app.post('/api/transaction',(res,req) => {
    res.send(req.bodypa);
});

app.listen(port, (req, res) => {
    console.log('listening on port 4000');
});