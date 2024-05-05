// Require needed modules
const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// initialize the app object
const app = express()

//ROUTES
app.get('/', function(req, res) {
    //this gets sent to the client
    res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//listen for connections
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})