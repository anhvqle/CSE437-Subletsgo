const express = require('express');
const cors = require("cors");
const app = express();
const port = 3001;
const User = require("./models/user");

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const sequelize = require("./db/database");

sequelize.sync().then(result => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

//--------------------------- Sign Up ---------------------------
app.post("/signup", (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    
    console.log(firstName, lastName, email, password);
});

//--------------------------- Log In ---------------------------
app.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    console.log(email, password);
});