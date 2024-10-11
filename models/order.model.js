const mongoose = require('mongoose');
const Table_size = require("./table.model");
const Customer = require("./accounts/customer.model");

const locationSchema = new mongoose.Schema({
    street: {
        type: String,
        required: [true, 'Required']
    },
    city: {
        type: String,
        required: [true, 'Required']
    },
    province: {
        type: String,
        required: [true, 'Required']
    },
    country: {
        type: String,
        default: 'Vietnam'
    }
});

const bookingSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    user: [Customer],
    tabletype: [Table_size],
    canceled: {
        type: Boolean,
        default: false,
    }
});

const gettingDeliverySchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    user: [Customer],
    canceled: {
        type: Boolean,
        default: false,
    },
    location: {
        type: locationSchema,
        required: true
    }
});

const BookingOrder = mongoose.model('BookingOrder', bookingSchema);
const GettingDeliveryOrder = mongoose.model('GettingDeliveryOrder', gettingDeliverySchema);

module.exports = { BookingOrder, GettingDeliveryOrder };
