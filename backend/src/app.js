const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/index');
const Laptop = require('./models/laptop');
const LaptopType = require('./models/laptopType');

const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

app.get('/laptops', async (req, res) => {
  let params = req.query
  for (let param in params) {
    const value = params[param];
    if (value === '' || value === null || (Array.isArray(value) && value.length === 0)) {
      delete params[param];
    }
  }

  if(!!params.price && params.price !== '') {
    const range = params.price.split("-")
    params.price = { $gt: range[0], $lte: range[1] }
  }

  try {
    const laptops = await Laptop.find(params);
    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/laptop_types', async (req, res) => {
  const params = {}
  try {
    const laptopTypes = await LaptopType.find(params);

    if (!laptopTypes) {
      return res.status(404).json({ error: 'no laptop types found' });
    }

    res.json(laptopTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = app;
