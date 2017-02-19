'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity').userModel;
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const connectFlash = require('connect-flash');

/* add the user to the system */
router.post('/add', function(req, res) {
   if (Object.keys(req.body).length > 0) {
       let user = new userModel(req.body);
       if (req.body) {
           user.save(function(err) {
               if (err) {
                   res.send(err);
               } else {
                   res.send('inserted successfully');
               }
           });
       }
   } else {
       res.send('enter the data');
   }
});

/* Get details of all user in the system */
router.get('/find', function(req, res) {
   logger.debug('Inside get');
   userModel.find({}, function(err, user) {
       if (err) {
           res.send(err);
       } else {
           //  logger.debug(user);
           res.send(user);
       }
   });
   //res.send('response from user GET route check');
});

/* update details of all user in the system */
router.put('/update', function(req, res) {
   logger.debug('Inside update');
   let name = req.body.username;
   let password = req.body.password;
   if (Object.keys(req.body).length === 0) {
       res.send('response from user update route check');
   } else {
       userModel.update({
           userName: name
       }, {
           $set: {
               password: password
           }
       }, function(err) {
           if (err) {
               res.send(err);
           } else {
               logger.debug(name + " " + password);
               res.send('updated successfuly');
           }
       })
       //  res.send('updated');
   }
});

/* Delete details of user in the system */
router.delete('/delete', function(req, res) {
   logger.debug('Inside delete');
   let name = req.body.username;
   if (Object.keys(req.body).length === 0) {
       res.send('response from user delete route check');
   } else {
       userModel.remove({
           userName: name
       }, function(err) {
           if (err) {
               res.send(err);
           } else {
               res.send('deleted successfully');
           }
       })
       //res.send('deleted');
   }
});
router.post('/login',
passport.authenticate('local', {
failureFlash: 'Invalid Username and Password',
successFlash: "Welcome to Movie App"}
),
function(req, res) {
  res.json({responseText:'authenticated'});
}
);

router.get('/logout', function(req, res){
console.log('Session deleted');
req.session.destroy();
});
module.exports = router;
