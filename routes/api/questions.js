const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

//import Questions model.

const Question = require('../../models/Questions');


router.post('/questionstophat', async (req, res, next) => {
  try {

    let questions = new Question({
      _id: new mongoose.Types.ObjectId(),
      questionTitle: req.body.questionTitle,
      questionType: req.body.questionType,
      questionText: req.body.questionText,
      points: req.body.points,
      choices: req.body.choices,
      textboxAnswer: req.body.textboxAnswer
    });

    let result = await questions.save();
    console.log("result:", result);
    return res.status(201).send(result);

  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
});


router.get('/questions', async (req, res) => {
  // Gets the questions from mongodb
  Question.find(function (err, questions) {
    if (err) {
      return res.status(400).json({
        message: "Error loading questions"
      })
    }
    return res.status(200).send(questions);;
  });

});

module.exports = router;
