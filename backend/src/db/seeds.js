const laptops = require("./laptops")
const mongoose = require('mongoose');
const Laptop = require("../models/laptop")
const Message = require("../models/Message")

const laptopTypes = require("./LaptopTypes")
const LaptopType = require("../models/laptopType")
let dbUrl = `mongodb://mongo:27017/mongo`

// dbUrl = `mongodb://localhost:27017/mongo` // Uncomment this to run on your local environment

mongoose.connect(dbUrl, { useNewUrlParser: true }).then(
  () => {
    console.log('MongoDB Connected')
    console.log('Writing seed data to MongoDB database')

    LaptopType.deleteMany({}).then(result => {
      laptopTypes.forEach (async (laptopType) => {
        const newLaptopType = new LaptopType( laptopType );
        const savedItem = await newLaptopType.save();
        console.log(savedItem);
      })  
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
    Laptop.deleteMany({})
      .then(result => {
        console.log('Deleted', result.deletedCount, 'documents');
        
        laptops.forEach (async (laptop) => {
          const newLaptop = new Laptop( laptop );
          const savedItem = await newLaptop.save();
        })  
        console.log(`Saved ${laptops.length} new laptops`);
        
      })
      .catch(err => {
        console.error('Error deleting documents:', err);
        mongoose.connection.close();
      });
  }
  )
  .catch(err => console.log(err));



