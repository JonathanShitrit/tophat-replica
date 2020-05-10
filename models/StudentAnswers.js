const mongoose = require('mongoose');

//schema to hold the array of objects for answer choices.
/*
const studentResults = new Schema({
  isCorrect: String,
  picks: {type: [Number] },
  points: Number
});
*/

const studentAnswersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  questionSet: { type: Schema.ObjectId, ref: 'QuestionSet' },
  score: {type: Number }
});

module.exports = mongoose.model('studentAnswer', studentAnswersSchema);
