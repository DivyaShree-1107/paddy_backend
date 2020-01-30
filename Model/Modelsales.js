var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
Username: {
    type: String,
    required: true
},
salesno:{
    type: Number
    
}
});

module.exports = mongoose.model('Task4', TaskSchema);