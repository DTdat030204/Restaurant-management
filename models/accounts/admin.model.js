const mongoose = require('mongoose');
const Accounts = require("../accounts")

const AdminSchema = Accounts.discriminator('Admin', new mongoose.Schema({
    adminID: {
        type: String,
        required: [true, 'Required'],
        index: true,
        unique: true
    }
}));


const Admin = mongoose.model("Admin", AdminSchema);

module.exports = { Admin };