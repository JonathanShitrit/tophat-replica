const express = require("express");
const request = require("request");
const path = require("path");

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


const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));