const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const bcrypt = require("bcrypt");

//import User model.

const User = require('../../models/Users');

//Successfully registers new user to DB and checks if existing user.
/*
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
    console.log("result:", result);
    return res.status(201).send(result);

  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
});


router.post('/login', async (req, res, next) => {
  console.log(req.body);
  try {
    let user = await User.find({ username: req.body.username, password: req.body.password }).exec();
    console.log(user);
    if (user.length < 1) {
      return res.status(404).json({
        message: 'Auth failed'
      });
    }
    let result = await User.findOne({ username: req.body.username, password: req.body.password }).exec();

    if (result) {
      res.status(200).send(result);
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
*/


router.post('/register', async (req, res, next) => {

  try {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
      // password is now hashed...
      User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }, function (err, user) {
        if (err) {
          return res.status(404).json({
            message: "Error"
          })
        }
        if (user) {
          return res.status(400).json({
            message: 'Username or Email is taken'
          });
        }
        else {
          var newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            usertype: req.body.usertype,
            password: hash
          });

          newUser.save(function (err) {
            if(err) return next(err);
            console.log(newUser);
            res.status(201).send(newUser);
          });
        }
      })
    })
  } catch (err) {
    return res.status(500).json({
      error: err
    });
  }
})


router.post('/login', async (req, res, next) => {

  try {
    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        return res.status(404).json({
          message: 'Auth failed'
        });
      }

      if (!user) {
        return res.status(401).json({
          message: "Invalid username or password"
        });
      }
      else {
        // Check if given password hash matches the database password hash
        bcrypt.compare(req.body.password, user.password, function (err, valid) {
          if (err) {
            res.status(400).json({ error: err });
          }
          else if (!valid) {
            return res.status(401).json({
              message: "Invalid username or password"
            });
          }
          else if (valid) {
            // Log user in
            res.status(200).send(user);
          }
        })
      }
    })
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
