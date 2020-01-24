var express = require('express');
var app = express();
var port = process.env.PORT || 8191;
var mongoose = require('mongoose');
var Tasks = require('./Model/Model');
var Tasks1 = require('./Model/Modelbuy')
var Tasks2 = require('./Model/Modelemail')

var bodyParser = require('body-parser');

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");




mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Register', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// mongoose.connect('mongodb://localhost', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("body-parser").text());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

var routes = require('./Router/Router');
routes(app);

app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message
  });
});

// app.listen(8192, () => console.log("Listening on port 8191"));

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);


