const mongoose = require('mongoose');


const questionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  questionType: { type: String, required: true, trim: true },
  questionText: {type: String, required: true, trim: true },
  points: {type: Number, required: true },
  choices: [mongoose.Schema.Types.Mixed],
  textBoxAnswer: { type: String }

});

module.exports = mongoose.model('Questions', questionsSchema);
