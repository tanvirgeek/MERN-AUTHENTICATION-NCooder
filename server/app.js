const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mernauth',{useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected to database");
});

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});