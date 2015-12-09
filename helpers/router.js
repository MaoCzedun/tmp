var express = require('express'),
    User = require('../models/User').User,
    router = express.Router();
router.use(function(req,res,next){
  console.log('Something  is happening');
  next();
});
router.get('/',function(req,res){
  res.json({message:"hooray! welcome to our api!"});
});
router.route('/users')
  .post(function(req,res){
    var user = new User(22,req.body.name);
    user.save();
    res.json(user);
  })
  .get(function(req,res){
     res.json(new User(null,null).all());
  });
router.route('/users/:user_id')
  .get(function(req,res){
    res.json(new User(null,null).find(req.params.user_id));
  });
  module.exports.router = router;
