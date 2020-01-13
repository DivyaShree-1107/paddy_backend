var express = require('express');
var app = express();
var port = process.env.PORT || 8191;
var mongoose = require('mongoose');
var Tasks = require('./Model/Model');
var Tasks1= require ('./Model/Modelbuy')
var bodyParser = require('body-parser');

  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Register', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// mongoose.connect('mongodb://localhost', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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



app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({
        message:message
    });
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);


