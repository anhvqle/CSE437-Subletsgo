const express = require('express');
const User = require('../../models/tenant')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/newTenantListingApi", async (req, res) => {
    const { fullName, phoneNumber, email, occupation, company, description } = req.body;
  
    console.log(fullName, phoneNumber, email, occupation, company, description);
});
  

module.exports = router;