const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

//import QuestionsSet model.

const QuestionSet = require('../../models/QuestionSet');


router.post('/questionset', async (req, res, next) => {
    try {

        let questionset = new QuestionSet({
            _id: new mongoose.Types.ObjectId(),
            questionSetName: req.body.questionSetName,
            questions: req.body.questions
        })

        questionset.save(function (err) {
            if (err) return next(err);
            console.log(questionset);
            res.status(201).send(questionset);
        });

    } catch (err) {
        return res.status(500).json({
            error: err
        });
    }
});

router.get('/questionset', async (req, res) => {
    // Gets the questions from mongodb
    QuestionSet.find(function (err, questionsets) {
        if (err) {
            return res.status(400).json({
                message: "Error loading questions"
            })
        }
        return res.status(200).send(questionsets);;
    });

});

module.exports = router;
