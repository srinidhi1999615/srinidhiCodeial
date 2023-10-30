const express = require("express");
const router= express.Router();
const homeController = require('../contollers/homeController');
router.get('/',homeController.home);
module.exports=router;