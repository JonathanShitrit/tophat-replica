const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

//import QuestionsSet model.

const QuestionSet = require('../../models/StudentAnswers');


router.post('/studentanswers', async (req, res, next) => {
    try {

        let studentanswers = new StudentAnswers({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            questionSet: req.body.id,
            score: req.body.score
        })

        studentanswers.save(function (err) {
            if (err) return next(err);
            console.log(studentanswers);
            res.status(201).send(studentanswers);
        });

    } catch (err) {
        return res.status(500).json({
            error: err
        });
    }
});


module.exports = router;
