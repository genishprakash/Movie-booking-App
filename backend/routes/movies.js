const express = require("express");
const movieController=require("../controllers/movieController")
const router = express.Router()


router.route('/:id').put(movieController)

module.exports=router