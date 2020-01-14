var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
Firstname: {
    type: String,
    required: true
},
Username:{
    type: String,
    required:true
},
password:{
    type: String,
    required: true
},
Confirmpassword:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},

Mobnum:{
    type: Number,
    required: true
},
Admin:{
    type:Boolean,
}

});

module.exports = mongoose.model('Tasks', TaskSchema);