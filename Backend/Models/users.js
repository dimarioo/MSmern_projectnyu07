const mongoose = require('mongoose')
const  { Schema } = mongoose

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    age: {
        type: Date,
        required: true,
    }, 
    username: {
        type: String,
        required: true,
    },
    email: {
        type: ,
        required: true
    },
    password: {
        type: Number,
        required: true,
    }


})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel
