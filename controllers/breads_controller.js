const express = require('express')
const breads = express.Router()
const bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) => {
    res.render('index', 
        {
            breads: bread
        }
    )
    //res.send(bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
  })
  

module.exports = breads