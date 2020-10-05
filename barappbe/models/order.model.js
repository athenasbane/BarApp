const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    orderedItems: {
        type: Array,
        required: true,
        item: {
            type: Object,
            itemId: {
                type: String,
                required: true
            },
            volume: {
                type: Number,
                required: true
            }
        }
    },
    tableNumber: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }, 
    delivered: {
        type: Boolean,
        required: true,
        default: false,
    }
},{
    timestamps: true
});

const Order = mongoose.model('Order', userSchema);

module.exports = Order;