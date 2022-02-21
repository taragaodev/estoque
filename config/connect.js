const mongoose = require('mongoose');
const database = require('./database');

const connect = mongoose.connect(database.mongoUri);

module.exports = connect;