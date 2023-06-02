const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  message: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;