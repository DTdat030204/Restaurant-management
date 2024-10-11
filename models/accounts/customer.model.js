const mongoose = require('mongoose');
const Accounts = require("../accounts");

const CustomerSchema = Accounts.discriminator('Customer', new mongoose.Schema({
    CustomerID: {
        type: String,
        required: [true, 'Required'],
        index: true,
        unique: true
    }
}));


const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = { Customer };