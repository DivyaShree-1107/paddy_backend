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
  var User = new UserData(req.body);
  User.save({},function(err, data) {
  if (err)
  res.send(err);
  res.json(data);
  });
};











