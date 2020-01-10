var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema1 = new Schema({
Name: {
    type: String,
    required: true
},
Address:{
    type: String,
    required:true
},
RTCNumber:{
    type: Number,
    required: true
},
Quantity:{
    type: Number,
    required: true
},
Price:{
    type: Number,
    required: true
},

Type:{
    type: String,
    required: true
},
AccName:{
    type: String,
    required: true
},
AccNumber:{
    type: Number,
    required: true
},


});

module.exports = mongoose.model('Tasks1', TaskSchema1);