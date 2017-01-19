// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  userId: { type: String, unique: true },
  imageUrl: String,
  accessToken: String,
  refreshToken: String,
  dob: String,
  phone: String,
  diabType: String,
  profileComplete: { type: Boolean, default: false },
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
Schema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var User = mongoose.model('User', Schema);

// set up a mongoose model and pass it using module.exports
module.exports = User;