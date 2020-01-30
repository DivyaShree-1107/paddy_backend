const mongoose = require('mongoose');
const UserData = require('../Model/Modelsales');

exports.get_a_data = function (req, res) {
    UserData.find({}, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function (req, res) {
    var User = new UserData(req.body);
    User.save({}, function (err, data) {
        if (err)
        res.send(err);
        res.json(data);
    });
};