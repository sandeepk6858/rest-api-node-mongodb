const express = require('express')
const mongoose = require("mongoose")
require('dotenv/config')
const postRoutes = require('./routes/posts')
const bodyparse = require('body-parser')

const app = express();
app.use(bodyparse.json())
app.use('/posts', postRoutes)

//create connection
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true } , () => console.log('connected to db')
);


app.get('/', (req, res) => {
    res.send('Hello Node!!')
});

app.listen(3000);