const express = require('express');
const cors = require("cors");
const api = require("./api");
require("./models/user");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', api)

module.exports = app;