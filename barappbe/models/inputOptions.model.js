const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    type: {
        type: String,
        default: 'increment',
        required: true,
    },
    optionTitle: {
        type: String,
        required: true,
        trim: true,
    },
    minVol: {
        type: Number,
        default: 0,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    optionActive: {
        type: Boolean,
        required: true,
        default: false,
    },
    selector: {
        type: Array,
        required: false,

    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product' 
    }
});

const InputOption = mongoose.model('InputOption', userSchema);

module.exports = InputOption;