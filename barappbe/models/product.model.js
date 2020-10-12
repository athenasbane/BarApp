const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('options', {
  ref: 'Option',
  localField: '_id',
  foreignField: 'product',
});

const Product = mongoose.model('Product', userSchema);

module.exports = Product;
