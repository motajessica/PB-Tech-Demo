const laptops = require("./laptops")
const mongoose = require('mongoose');
const Laptop = require("../models/laptop")
let dbUrl = `mongodb://mongo:27017/mongo`
// dbUrl = `mongodb://localhost:27017/mongo` // Uncomment this to run on your local environment

mongoose.connect(dbUrl, { useNewUrlParser: true }).then(
  () => {
    console.log('MongoDB Connected')
    console.log('Writing seed data to MongoDB database')
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



