const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

//import User model.

const User = require('../../models/Users');

//Successfully registers new user to DB and checks if existing user.

router.post('/register', async (req, res, next) => {
  try {
    let user = await User.find({ username: req.body.username }).exec();

    if (user.length >= 1) {
      return res.status(400).json({
        message: 'Username exists'
      });
    }

    user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      usertype: req.body.usertype,
      password: req.body.password
    });

    let result = await user.save();
    console.log(result);
    return res.status(201).json({
      message: 'Successful'
    });
  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
});


router.post('/login', async (req, res, next) => {
  console.log(req.body);
  try {
    let user = await User.find({ username: req.body.username , usertype: req.body.usertype, password: req.body.password }).exec();
    console.log(user);
    if (user.length < 1) {
      return res.status(404).json({
        message: 'Auth failed'
      });
    }
    let result = await User.find({ username: req.body.username, usertype: req.body.usertype, password: req.body.password }).exec();

    if (result) {
      res.status(200).json('Logged in successfully');
    }
    else {
      return res.status(404).json({
        message: 'Auth failed'
      });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err
    });
  }
});

/*
// Handles the CORS error
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Returns all users in json format
router.get("/findAll", function (req, res) {
  User.find(function (err, users) {
    res.json(users);
  });
});

// Assigns the req.email to the email specified in the url
router.param("email", function (req, res, next, userEmail) {
  req.email = userEmail;
  next();
});

// Returns the specified user in json format
router.get("/find/:email", function (req, res) {
  User.find({ email: { $eq: req.email } }, function (err, users) {
    res.json(users);
  });
})
*/

module.exports = router;
