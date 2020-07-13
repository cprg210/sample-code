// import modules
const path = require('path');
const express = require('express');
const animals = require('./animals');

// create express app
const app = express();
app.set('view engine', 'pug');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Enpoint handler for the home page
app.get('/', function(request, response){
  response.render('index.pug',{});
})

// Enpoint handler for the home page
app.get('/hello-world', function(request, response){
  response.render('hello-world.pug',{});
})

// if no, send a 404 error as a response to the browser
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});