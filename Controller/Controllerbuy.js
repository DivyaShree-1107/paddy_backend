const mongoose = require('mongoose');
const UserData =require('../Model/Modelbuy');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')
    

exports.get_a_data = function(req, res) {
  var User = new UserData(req.body);
  User.find({}, function(err, task1) {
  if (err)
    res.send(err);
    res.json(task1);
  });
};



exports.update_a_task = function(req, res)
{
  var User = new UserData(req.body);
  User.save({},function(err, data) {
  if (err)
  res.send(err);
  res.json(data);
  });
};











