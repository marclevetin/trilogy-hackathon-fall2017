var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = Schema(
    {   
        name: {type: String, required: true, max: 100},  
        email: {type: String, required: true, max: 100}, 
        slack: {type: String, max: 100} 
    }
) 



module.exports = mongoose.model('Student', StudentSchema);