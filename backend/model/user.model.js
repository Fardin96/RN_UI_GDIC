const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: true,
    // TODO: add min length
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
