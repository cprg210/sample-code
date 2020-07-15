// import modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
// const animals = require('./animals');

// Models
const Gallery = require('./models/gallery.js');
const animals = require('../sample-code/in-class/day13-require-custom-module/animals.js');

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Define an endpoint handler for the home page 
app.get('/', function(request, response){
  response.render('animal-list',{});
})

// Define an endpoint handler for the individual animal pages
app.get('/:id', function(request, response){

  // model.findOne returns the first object it finds
  // model.find will always return an array, even if it only finds one 
  Gallery.findOne({'id': request.params.id}, function(error, animal) {
  
    // Check for IDs that are not in our list
    if (!animal) {
      return response.send('Invalid ID.');
    }

    // Compile view and respond
    response.render('animal-single',animal);
  });
})

// Create a JSON (no EJS here) that returns the entire animal JSON
// This is the endpoint that the frontend gallery script calls (see: ./public/js/app.js).
app.get('/api/animals', function(request, response){

  // response.json(animals);

  Gallery.find(function(error, result) { 
    response.json(result);
  });

})



// if no file or endpoint found, send a 404 error as a response to the browser
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});