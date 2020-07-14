// import modules
const path = require('path');
const express = require('express');

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
app.get('/puppy.html', function(request, response){
  response.render('animal-single',{title: 'Puppy', id: 237});
})

app.get('/bear.html', function(request, response){
  response.render('animal-single',{title: 'Bear', id: 433});
})

app.get('/moose.html', function(request, response){
  response.render('animal-single',{title: 'Moose', id: 577});
})

app.get('/coyote.html', function(request, response){
  response.render('animal-single',{title: 'Coyote', id: 582});
})

app.get('/tiger.html', function(request, response){
  response.render('animal-single',{title: 'Tiger', id: 593});
})

app.get('/husky.html', function(request, response){
  response.render('animal-single',{title: 'Husky', id: 659});
})

app.get('/wolf.html', function(request, response){
  response.render('animal-single',{title: 'Wolf', id: 718});
})

app.get('/monkey.html', function(request, response){
  response.render('animal-single',{title: 'Monkey', id: 783});
})

app.get('/elk.html', function(request, response){
  response.render('animal-single',{title: 'Elk', id: 790});
})

app.get('/bulldog.html', function(request, response){
  response.render('animal-single',{title: 'Bulldog', id: 837});
})

app.get('/bird.html', function(request, response){
  response.render('animal-single',{title: 'Bird', id: 1024});
})

app.get('/pug.html', function(request, response){
  response.render('animal-single',{title: 'Pug', id: 1025});
})

app.get('/big-cat.html', function(request, response){
  response.render('animal-single',{title: 'Big Cat', id: 1074});
})

app.get('/walrus.html', function(request, response){
  response.render('animal-single',{title: 'Walrus', id: 1084});
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