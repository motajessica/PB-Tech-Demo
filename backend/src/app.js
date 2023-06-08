const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/index');
const Laptop = require('./models/laptop');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

app.get('/laptops', async (req, res) => {
  const params = req.query
  for (let param in params) {
    const value = params[param];
    if (value === '' || value === null || (Array.isArray(value) && value.length === 0)) {
      delete params[param];
    }
  }

  console.log(params)
  try {
    console.log(req.query)
    const laptops = await Laptop.find(params);
    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = app;
