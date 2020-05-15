const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSetSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  questionSetName: { type: String, required: true, trim: true },
  questions: { type: [Schema.Types.ObjectId], ref: 'Questions' }

});

module.exports = mongoose.model('QuestionSet', questionSetSchema);
