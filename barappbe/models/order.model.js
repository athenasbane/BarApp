const mongoose = require('mongoose');

const Item = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subOption: {
    type: String,
    required: true,
  },
  optionId: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    orderedItems: {
      type: [Item],
      required: true,
      default: undefined,
    },
    tableNumber: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    delivered: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', userSchema);

module.exports = Order;
