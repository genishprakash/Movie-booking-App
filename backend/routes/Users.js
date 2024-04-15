const express = require("express");
const loginController = require("../controllers/UserController");

const router = express.Router()

router.route('/login').post(loginController); 

module.exports=router