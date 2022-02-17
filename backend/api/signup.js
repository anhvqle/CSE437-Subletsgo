const express = require('express');
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    console.log(firstName, lastName, email, password);
});
  

module.exports = router;