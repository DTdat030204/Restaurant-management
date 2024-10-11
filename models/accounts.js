const mongoose = require('mongoose');


const accountsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Required'],
        match: [nameRegex, 'Invalid']
    },

    email: {
        type: String,
        required: [true, 'Required'],
        match: [emailRegex, 'Invalid']
    },

    phoneNumber: {
        type: String,
        required: [true, 'Required'],
        match: [phoneRegex, 'Invalid']
    },
    
    joinDate: {
        type: Date,
        default: Date.now
    }
});

const Accounts = mongoose.model('Accounts', accountsSchema);
module.exports = { Accounts };