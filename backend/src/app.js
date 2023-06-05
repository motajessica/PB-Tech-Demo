const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/index');
const Item = require('./models/item');

dotenv.config();

const app = express();

app.get('/', async (req, res) => {
  try {
    const item = await Item.findOne({ message: 'Hello World' });

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({message: item.message});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/add', async (req, res) => {
  try {
    const message = 'Hello World';
    const newItem = new Item({ message });
    const savedItem = await newItem.save();

    res.send('Saved item');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = app;
