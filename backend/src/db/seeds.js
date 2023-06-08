const laptops = require("./laptops")
const mongoose = require('mongoose');
const Laptop = require("../models/laptop")
const Message = require("../models/Message")

const laptopTypes = require("./LaptopTypes")
const LaptopType = require("../models/laptopType")

mongoose
.connect(`mongodb://localhost:27017/mongo`, { useNewUrlParser: true })
.then(
  () => {
    console.log('MongoDB Connected')
    console.log('Writing seed data to MongoDB database')
    laptops.forEach (async (laptop) => {
      const newLaptop = new Laptop( laptop );
      const savedItem = await newLaptop.save();
      console.log(savedItem);
    }) 

    laptopTypes.forEach (async (laptopType) => {
      const newLaptopType = new LaptopType( laptopType );
      const savedItem = await newLaptopType.save();
      console.log(savedItem);
    })  

    //Task 6
    const messageItem= {
      message: "hello world"
    }

    const show = async () => {
      const newMessage= new Message(messageItem);
      const savedItem = await newMessage.save();
      console.log(savedItem);
    }
    show();
  }
  )
  .catch(err => console.log(err));