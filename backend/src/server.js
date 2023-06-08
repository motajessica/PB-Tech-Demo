const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let dbUrl = `mongodb://mongo:27017/mongo`
// dbUrl = `mongodb://localhost:27017/mongo` // Uncomment this to run on your local environment

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});