const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// dotenv.config();
// console.log(`Running application in ${process.env.NODE_ENV} environment`)
// const mongoServer = process.env.NODE_ENV === 'development' ? 'localhost' : 'mongo'

// IMPORTANT:As a temporary solution to run this locally, change the value of URI for the address of your local mongo database. 
const URI = "mongodb+srv://pb_tech_admin:4LRNRFNAv4bka7tf@pb-tech-cluster.fpgwzve.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});