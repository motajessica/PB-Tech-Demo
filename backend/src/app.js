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
