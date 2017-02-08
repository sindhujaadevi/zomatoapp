'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity').userModel;

router.post('/add', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
    let user = new userModel(req.body);
    user.save(function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'User saved successfully'});
    }
    });
  }
})

// Get details of all users in the system
router.get('/', function(req, res) {

  res.send('response from user GET route check');
});

module.exports = router;
