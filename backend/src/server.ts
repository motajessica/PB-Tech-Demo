
import env from 'dotenv'
import app from './app'

import mongoose from 'mongoose'
import bodyParser from 'body-parser'

env.config()

mongoose.connect("mongodb://mongo:27017/app-demo");
app.set('view engine', 'ejs');

mongoose
  .connect(
    'mongodb://mongo:27017/app-demo',
    { useNewUrlParser: true } as any
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
}); 

