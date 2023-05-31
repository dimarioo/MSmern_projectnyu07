const express = require('express');
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./Models/users');


mongoose.connect('mongodb+srv://dimariooliver:<Password>@mern-appnyu07.ya2btmt.mongodb.net/to-do-list?retryWrites=true&w=majority')



app.listen(3001, () => {
    console.log('Server is Running')
})