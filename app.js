const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/fruitsDB';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry. No name specified."],
  } ,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty Solid"
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "tom",
  age: 32
});

// person.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    })
    //console.log(fruits);
  }
});
Person.find(function(err, people) {
  if (err) {
    console.log(err);
  } else {

    people.forEach(function(person) {
      console.log(person.name);
    })
    //console.log(fruits);
  }
});

Fruit.updateOne({_id: "61607c37e295470aa91d843b"}, {name: "Peach"}, function (err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

Fruit.deleteOne({_id: "61607c37e295470aa91d843b"}, function (err){
  if(err) {
    console.log(err);
  } else {
    console.log("Record deleted.")
  }
});
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
