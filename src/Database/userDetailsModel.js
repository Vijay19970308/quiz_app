const mongoose = require('mongoose');

const {userDetailsSchema} = require('./userDetailsSchema');
let userDetailsModel = mongoose.model('userDetailCollection',userDetailsSchema);

exports.userDetailsModel = userDetailsModel;