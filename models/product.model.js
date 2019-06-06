const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: [true, 'Price can not be blank??!'] },
});

module.exports = mongoose.model('Product', ProductSchema);
