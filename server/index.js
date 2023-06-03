const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('home')
})

// Listen for Connections
app.listen(process.env.PORT)