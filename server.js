// Require needed modules
const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// initialize the app object
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//ROUTES
app.get('/', function(req, res) {
    //this gets sent to the client
    res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//listen for connections
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})