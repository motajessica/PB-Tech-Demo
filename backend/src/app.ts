import express from 'express'
import env from 'dotenv'
import router from './routes/index'
import { Request, Response } from 'express';
import Item from './models/item';

env.config()

const app = express()

app.get('/', async (req, res) => {
  try {
    // Find the item with the specified message
    const item = await Item.findOne({ message: "Hello World" });

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/add', async (req, res) => {
  try {
    const message = "Hello World" 

    // Create a new item object
    const newItem = new Item({
      message
    });

    // Save the new item to the database
    const savedItem = await newItem.save();

    res.send("Saved item");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
})


export default app