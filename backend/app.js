const express = require('express');
const cors = require("cors");
const api = require("./api");
require("./models/user");

const app = express();

// const corsOptions = {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
// };

// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
// Limit 100 mb?
app.use(express.json({ limit: 1024 * 1024 * 100 }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', api)

module.exports = app;