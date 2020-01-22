var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmailSchema = new Schema({

Email: {
type: String,
required: 'Please Enter valid emailId'
}

});

module.exports = mongoose.model('mail', EmailSchema);