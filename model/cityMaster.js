// load the things we need
const mongoose = require('mongoose');

//var dataTables = require('../');

// define the schema for our user model
const master_city = mongoose.Schema({
    state: String,
    stateCode:Number,
    district :{
        name: String,
        districtCode: Number,
        city :{
            town:String,
            urbanStatus: String,
        }
    }
    
});


// create the model for city and expose it to our appSchema
module.exports = mongoose.model('master_city', master_city);