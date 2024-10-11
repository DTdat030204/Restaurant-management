const mongoose = require('mongoose');
const Accounts = require("../accounts");

const StaffSchema = Accounts.discriminator('Staff', new mongoose.Schema({
    staffID: {
        type: String,
        required: [true, 'Required'],
        index: true,
        unique: true
    }
}));


const Staff = mongoose.model("Staff", StaffSchema);

module.exports = { Staff };