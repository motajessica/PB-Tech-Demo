const mongoose = require('mongoose');

const { Schema } = mongoose;

const LaptopSchema = new Schema({
    name: String,
    cpuFamily: String,
    memorySize: String,
    screenSize: String,
    screenReso: String,
    ssdCapacity: String,
    hddCapacity: String,
    gpuModel: String,
    opSystem: String,
    price: String,
    laptopType: String
});

const Laptop = mongoose.model('Laptop', LaptopSchema);

module.exports = Laptop;