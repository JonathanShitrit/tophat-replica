const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

//import Questions model.

const Question = require('../../models/Questions');


router.post('/questionstophat', async (req, res, next) => {
   try {

     let questions = new Question({
       _id: new mongoose.Types.ObjectId(),
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


 module.exports = router;
