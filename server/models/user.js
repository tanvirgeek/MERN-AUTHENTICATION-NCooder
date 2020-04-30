const mongoose = require('mongoose');
const bcrypt = require(bcrypt);

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        min: 4,
        max: 14
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        enum:['user', 'admin']
    },
    todos : [{type: mongoose.Schema.Types.ObjectId, ref: 'Todo'}]
});