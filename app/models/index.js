const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db={};

db.mongoose = mongoose;

db.user = require('./role.model')
db.role = require('./role.model')

db.Roles = ["user", "admin", "moderator"]

module.exports = db;