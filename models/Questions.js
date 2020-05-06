const mongoose = require('mongoose');

//schema to hold the array of objects for answer choices.
const answerChoices = new Schema({
  choiceNumber: Number,
  choice: String,
  isRight: String
});

const questionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  questionType: { type: String, required: true, trim: true },
  questionText: {type: String, required: true, trim: true },
  points: {type: Number, required: true },
  choices: [answerChoices],
  TextBoxAnswer: { type: String }

});

module.exports = mongoose.model('Questions', questionsSchema);
