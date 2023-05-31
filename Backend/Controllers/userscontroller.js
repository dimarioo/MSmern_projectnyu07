const express = require('express');
const app = express();
const mongoose = require('mongoose')
const UserModel = require('../Models/users')


app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then((UserModel) => {
        console.log('User Loaded')
        })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})
