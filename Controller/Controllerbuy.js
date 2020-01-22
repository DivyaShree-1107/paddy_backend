const mongoose = require('mongoose');
const UserData =require('../Model/Modelbuy');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')
    

exports.get_a_data = function(req, res) {
console.log(req.params)
  UserData.find({}, function(err, data) {
  if (err)
    res.send(err);
    res.json(data);
  });
};

// exports.get_a_data = function(req, res) {
//   console.log(req.body)
// UserData.findBy(req.body.RTCNumber, function(err, task) {
//   if (err)
//   res.send(err);
//   res.json(task);
//   });
//   };


exports.update_a_task = function(req, res)
{
  var mail = new User(req.body);
   //mail.save(function(err, data){
//   // if(err)
//   // res.send(err.message);
//   // res.json(data);
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
    text: `Hii, we have  credited your account with the respective amount`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error.message);
    } else {
      console.log('Email sent: ' + info.response);
      console.log("hai", req.body);
      var Leavem = new User(req.body);
      Leavem.save(function (err, data) {
        if (err)
          res.send(err);
        res.json(data);
      })
    };
  }
  )
}



//    const reg_email=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//   console.log(req.body.Email)
//   // if(reg_email.test(req.body.email)){
//   var mail = new nodemailer1(req.body.mail);
//   mail.save(function(err, data){
//   if(err)
//   res.send(err.message);
//   res.json(data);
//   var transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   requireTLS: true,
  
//   auth: {
//   user:'drudregowdaostb2@gmail.com',
//   pass:'divya9108170632'
//   }
//   });
//   mailOptions = {
//   from: 'drudregowdaostb2@gmail.com',
//   to: req.body.Email,
//   subject: 'Receipt of the Crop Purchase',
//   text: `Hii, we have  credited your account with the respective amount`
//   };
//   transporter.sendMail(mailOptions, (error, info)=>{
//   if (error) {
//   return console.log(error.message);
//   } else {
//     var User = new UserData(req.body);
//     User.save({},function(err, data) {
//     if (err)
//     res.send(err);
//     res.json(data);
//     });
   
//   console.log('Email sent: ' + info.response);
//   }
//   });
//   })



 
// };











