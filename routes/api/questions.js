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
    return res.status(200).send(questions);
  });

});

router.get('/questions/:id', async (req, res) => {
  // Gets the questions from mongodb for the set clicked
  Question.findOne({ _id: req.body.id }, function (err, question) {
    if (err) {
      return res.status(400).json({
        message: "Error loading questions"
      })
    }
    return res.status(200).send(question);
  });

});

router.param("id", function (req, res, next, id) {
  req.body.id = id;
  next();
});



module.exports = router;
