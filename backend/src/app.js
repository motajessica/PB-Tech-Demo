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
    const laptops = await Laptop.find(req.query);
    if (laptops && (laptops.length < 1)) {
      return res.status(404).json({ message: 'laptop not found' });
    }
    

    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = app;
