const express = require("express");
const request = require("request");
const path = require("path");
var mongoose = require('mongoose');
const router = express.Router();

const app = express();

app.use((req, res, next) => {
    console.log("request details. Method", req.method, "original url:", req.originalUrl);

    next();
});

// Handles the CORS error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    next();
});

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/ping", (req, res) => {
    res.send("pong!");
});



// handle errors middleware
app.use((err, req, res, next) => {
    console.log("err", err);

    res.status(500).json({ type: "error", message: err.message });
});


const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/tophat',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log('Connected to DB');
  });

app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
