const laptops = require("./laptops")
const mongoose = require('mongoose');
const Laptop = require("../models/laptop")

mongoose
.connect(`mongodb://localhost:27017/mongo`, { useNewUrlParser: true })
.then(
  () => {
    console.log('MongoDB Connected')
    console.log('Writing seed data to MongoDB database')
    Laptop.deleteMany();
    laptops.forEach (async (laptop) => {
      const newLaptop = new Laptop( laptop );
      const savedItem = await newLaptop.save();
      console.log(savedItem);
    })  
  }
  )
  .catch(err => console.log(err));