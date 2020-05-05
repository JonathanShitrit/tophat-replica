const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true, trim: true },
  usertype: { type: String, required: true, trim: true },
  password: { type: String, required: true }

});

module.exports = mongoose.model('User', userSchema);
