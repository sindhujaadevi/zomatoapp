'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const RestaurantModel = require('./restaurantEntity');


/* adding restaurants */
router.post('/add', function(req, res) {
    logger.debug(JSON.stringify(req.body));
    if (Object.keys(req.body).length>0) {
      let restaurant = new RestaurantModel(req.body);
      restaurant.save(function(err) {
        if(err)
        {
          console.log(err);
          res.send('enter new id');
        }
        else {
          res.send('Restaurant saved successfully');
        }
      });
    }
    else {
      res.send('enter some data')
    }
});


/* displays all the restaurant */
router.get('/displayall', function(req, res) {
  RestaurantModel.find({}, function(err,restaurants){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
});


/* displays the restaurants in that city */
router.get('/displaycity/:location', function(req, res) {
  let city = req.params.location;
  RestaurantModel.find({'address.0.city' : city}, function(err,restaurants){
    if(err)
    {
      res.send('enter a valid city');
    }
    else {
      if(restaurants.length>0)
      {
        res.send(restaurants);
      }
      else {
        res.send('enter a valid city');
      }
    }
  });
});

/* display based on id */
router.get('/display/:id', function(req, res) {
  let id = req.params.id;
  RestaurantModel.find({'_id' : id}, function(err,restaurants){
    if(err)
    {
      res.send('enter a valid id');
    }
    else {
      if(restaurants.length>0)
      {
        res.send(restaurants[0].comments);
      }
      else {
        res.send('enter a valid id');
      }
    }
  });
});



/* displays the restaurants based on name */
router.get('/displayrestaurant/:name', function(req, res) {
  let name = req.params.name;
  RestaurantModel.find({'name' : name}, function(err,restaurants){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
});


/* displays the restaurants in that state */
router.get('/displaystate/:location', function(req, res) {
  let state = req.params.location;
  RestaurantModel.find({'address.0.state' : state}, function(err,restaurants){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
});



/* updating all the data */
router.put('/update', function(req, res) {

  if(Object.keys(req).length>0)
  {
      RestaurantModel.findOneAndUpdate({_id: req.body.id},
         { $set: {comments: req.body.comment}}, function(err, users) {
        if(err)
        {
          res.send('enter all details');
        }
        else {
            res.send('Updated');
          }
      });
    }
    else {
      res.send('enter a valid restaurant details');
    }
});

/* deleting particular restaurant based on id */
router.delete('/deleteid', function(req, res) {
  let restaurantId = req.body.id;
  if(restaurantId !== null)
  {
    RestaurantModel.remove({ _id : restaurantId}, function(err) {
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Deleted the id ' + restaurantId + ' successfully');
        }
    });
  }
});


/* deleting all restaurants */
router.delete('/deleteall', function(req, res) {
    RestaurantModel.remove({}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Deleted all the restaurants successfully');
        }
    });
});

module.exports = router;
