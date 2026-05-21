const {Schema} = require("mongoose");
const OrdersSchema = new Schema({
    userID: {type:String,required: true},
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});
module.exports = {OrdersSchema};