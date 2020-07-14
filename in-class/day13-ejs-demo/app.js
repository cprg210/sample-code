// import modules
const path = require('path');
const express = require('express');

// create express app
const app = express();
app.set('view engine','ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  response.render('animal-list',{});
});

app.get('/puppy.html',function(request, response) {
  response.render('animal-item',{title: 'Puppy', id: 237});
});

app.get('/bear.html',function(request, response) {
  response.render('animal-item',{title: 'Bear', id: 433});
});

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