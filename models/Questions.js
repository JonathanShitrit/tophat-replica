const mongoose = require('mongoose');


const questionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  questionTitle: { type: String, required: true, trim: true },
  questionType: { type: String, required: true, trim: true },
  questionText: { type: String, required: true, trim: true },
  points: { type: Number, required: true },
  textboxAnswer: { type: String, trim: true },
  choices: [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('Questions', questionsSchema);
