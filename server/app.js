const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
require('dotenv').config();
const helmet = require('helmet');
app.use(helmet());

//connet to database
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected to database");
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

//Homepage


//server
app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});