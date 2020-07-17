const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

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

// Level 1: Schema
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  if (typeof this.name !== 'undefined') {
    return `Meow name is ${this.name}`;
  } else {
    return "I don't have a name.";
  }
}

// Level 2: Model
const Kitten = mongoose.model('Kitten', kittySchema);

// Level 3: Instance
const silence = new Kitten({name: 'Silence'});
const fluffy = new Kitten({name: 'Fluffy'});

console.log(silence.speak());

silence.save(function (err, silence) {
  if (err) return console.error(err);
  silence.speak();
});

Kitten.find(function(err, kitten) {
  console.log(kitten);
});

Kitten.find({name: /^Fluf/ },function(err, kitten) {
  console.log(kitten);
});