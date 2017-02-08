'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurantModel = require('./restEntity').restaurantModel;

// adding restaurants
router.post('/add', function(req, res) {
    logger.debug(JSON.stringify(req.body));
if(req.body._id !== null) {
      let restaurant = new restaurantModel(req.body);
      restaurant.save(function(err){
        if(err)
        {
          res.send('some error occurred');
        }
        else {
          res.send( ' Restaurant save successfully');
        }
      });
}
else {
	res.send('enter a valid restaurant Id')
}
});

router.delete('/delete', function(req, res){
	logger.debug('Received request'+JSON.stringify(req.body));
  if(req.body._id!==null)
  {
		restaurantModel.remove({_id:req.body._id}, function(err){
    if(err){
      res.send('err');
    }
    else{
       res.send('Restaurant deleted successfully');
    }
    });
  }
	else {
		res.send('enter a valid restaurant Id')
	}
})

router.put('/update', function(req, res){
	logger.debug('Received request'+JSON.stringify(req.body));
  if(req.body._id !== null)
  {
		restaurantModel.update({_id:req.body._id}, {$set: {location:req.body.location}}, function(err){
    if(err){
      res.send('err');
    }
    else{
       res.send('Restaurant updated successfully');
    }
    });
  }
	else {
		res.send('enter a valid restaurantId');
	}
})
router.post('/display', function(req, res){
	logger.debug('Received request'+JSON.stringify(req.body));
  if(req.body._id !== null)
  {
	restaurantModel.find(
			{$or: [{_id:req.body._id}]}, function(err, result) {
    if(err) {
      res.send(err);
    }
    else{
       res.json(result);
    }
    });
  }
	else {
		res.send('enter a valid restaurantId');
	}
})
router.get('/displayAll', function(req, res){
	logger.debug('Received request' + JSON.stringify(req.body));
  if(req.body)
  {
	restaurantModel.find(function(err,result){
    if(err){
      res.send(err);
    }
    else{
       res.send(result);
    }
    });
  }
})

router.get('/', function(req, res) {

  res.send('response from restaurant GET route check');
});

module.exports = router;
