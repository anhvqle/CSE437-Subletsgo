const express = require('express');
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    console.log(email, password);
});
  

module.exports = router;