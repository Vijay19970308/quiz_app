const mongoose = require('mongoose');
const {timerSchema} = require('./TimerSchema'); 
let timerModel = mongoose.model('TimerCollection',timerSchema);
exports.timerModel = timerModel;