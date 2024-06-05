import {model,Schema} from "mongoose"

const TransactionSchema = new Schema({
    name: {type: String,required: true},
    datetime: {type: Date,required: true},
    price: {type: Number,required: true}
})

const TransactionModel = model("Transaction",TransactionSchema);

export default TransactionModel;
