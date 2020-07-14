// import modules
const path = require('path');
const express = require('express');
// Custom module paths start with './' -> current directory 
const animals = require('./animals');

// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Display an image gallery when someone visits the home page
app.get('/', function(request, response){
  response.render('animal-list',{});
})

// Display an individual animal page when someone browses to an ID
// https://expressjs.com/en/api.html#req.params
app.get('/:id', function(request, response){

  // Find the specific animal in our module using array.find()
  // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
  const animal = animals.find(function(item) {

    return item.id === parseInt(request.params.id);

  });

  // Check for IDs that are not in our list
  if (!animal) {
    return response.send('Invalid ID.');
  }

  // We now pass our animal object into our view (the 2nd object must be an object)
  response.render('animal-single',animal);
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