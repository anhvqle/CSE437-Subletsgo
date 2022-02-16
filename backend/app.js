const express = require('express');
const app = express();
const port = 3001;

const User = require("./models/user");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const sequelize = require("./db/database");

sequelize.sync().then(result => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})