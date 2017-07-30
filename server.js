'use strict'

const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function() {
    console.log('Listening on port: ${PORT}')
})

app.get('*', function(request, response) {
    response.send('<h1>hello world</h1>')
})

// app.get('*', function(request,response) {
//     response.status(404).send('<h1>I NEED AN ADULT</h1>')

//     app.post
// })