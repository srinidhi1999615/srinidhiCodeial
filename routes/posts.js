const express=require('express');
const router= express.Router();
const postsController=require('../controllers/posts_controller');
const passport=require('passport');
router.get('/profile',postsController.profile);
router.post('/create',passport.checkAuthentication,postsController.create);
module.exports=router;