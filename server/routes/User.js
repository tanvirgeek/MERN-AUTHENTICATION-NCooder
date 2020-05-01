const express = require('express');
const userRouter = express.Router();
const passsport = require('passport');
const passportConfig = require('../passport');
const User = require('../models/user');
const Todo = require('../models/todo');

userRouter.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({
                message: {
                    msgbody: "error has occured",
                    msgError: true
                }
            })
        if (user)
            res.status(500).json({
                message: {
                    msgbody: "Username Already Exists",
                    msgError: true
                }
            })
        else {
            const newUser = new User({ username, password, role });
            newUser.save(err => {
                if (err)
                    res.status(500).json({
                        message: {
                            msgbody: "error has occured",
                            msgError: true
                        }
                    })
                else
                    res.status(201).json({
                        message: {
                            msgbody: "account succesfully created",
                            msgError: false
                        }
                    })
            })
        }
    })
})

userRouter.post('/login', (req, res)=>{
    
})

module.exports = userRouter;
