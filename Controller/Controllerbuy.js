const mongoose = require('mongoose');
const UserData =require('../Model/Modelbuy');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')
var nodemailer =require ('nodemailer')
    

exports.get_a_data = function(req, res) {
console.log(req.params)
  UserData.find({}, function(err, data) {
  if (err)
    res.send(err);
    res.json(data);
  });
};

exports.update_a_task = function(req, res)
{
  var mail = new UserData(req.body);
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,

    auth: {
      user: 'drudregowdaostb2@gmail.com',
      pass: 'divya9108170632'
    }
  });
  mailOptions = {
    from: 'drudregowdaostb2@gmail.com',
    to: req.body.Email,
    subject: 'Receipt of the Crop Purchase',
    text: 'Hello Greetings for the day, we have credited your account with respective amount that is Rs. '+ req.body.Price + ' for paddy transaction to the account with the name . Thank you for selling'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error.message);
    } else {
      console.log('Email sent: ' + info.response);
      console.log("hai", req.body);
      var Leavem = new UserData(req.body);
      Leavem.save(function (err, data) {
        if (err)
          res.send(err);
        res.json(data);
      })
    };
  }
  )
}











