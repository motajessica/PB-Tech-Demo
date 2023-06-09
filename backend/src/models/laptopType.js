const mongoose = require('mongoose');

const { Schema } = mongoose;

const LaptopTypeSchema = new Schema({
    id: Number,
    lTitle: String,
    lDetail: String,
    imageSrc: String,
});
const laptopType = mongoose.model('LaptopType', LaptopTypeSchema);

module.exports = laptopType;