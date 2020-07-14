// import modules
const path = require('path');
const express = require('express');
const animals = require('./animals');

// create express app
const app = express();
// EJS still needs to be installed via NPM
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Display an image gallery when someone visits the home page
app.get('/', function(request, response){
  response.render('animal-list',{});
})


// Setup many repetitive GET endpoints for each animal. Obviously there has to be a better way!
app.get('/:id', function(request, response){

  const oneAnimal = animals.find(function(item) {
    return item.id == request.params.id;
  });

  response.render('animal-single',oneAnimal);
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