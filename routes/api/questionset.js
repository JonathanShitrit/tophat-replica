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

router.get('/questionset/:name', async (req, res) => {
    // Gets the questions from mongodb for the set clicked
    QuestionSet.find({ questionSetName: req.body.questionSetName }, function (err, set) {
        if (err) {
            return res.status(400).json({
                message: "Error loading question"
            })
        }
        return res.status(200).send(set);
    });

});

router.param("name", function (req, res, next, name) {
    req.body.questionSetName = name;
    next();
});

module.exports = router;
