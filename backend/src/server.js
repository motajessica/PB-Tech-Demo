const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

mongoose
  .connect(`mongodb://mongo:27017/mongo`, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
