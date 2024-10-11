const mongoose = require('mongoose');


const EVENT_TYPE = ['Available', 'In-use'];
const TABLE_TYPE = ['2', '4', '8'];


const eventSchema = new mongoose.Schema({
    eventType: {
        type: String,
        required: [true, 'Required'],
        validate: {
            validator: (v) => {
                return EVENT_TYPE.includes(v);
            },
            message: "Invalid"
        }
    },
    
})
const tableSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Required'],
        validate: {
            validator: (v) => {
                return TABLE_TYPE.includes(v);
            },
            message: "Invalid"
        }
    },

    eventList: {
        type: [eventSchema],
    },
});

const Event = mongoose.model('Event', eventSchema);
const Table_size = mongoose.model('Table_size', tableSchema);
module.exports = { Event, Table_size };