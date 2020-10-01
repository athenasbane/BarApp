const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    tableNum: {
        type: Number,
        unique: true,
        required: true,
    },
    tableActive: {
        type: Boolean,
        required: true,
    }
});

const Table = mongoose.model('Table', userSchema);

module.exports = Table;