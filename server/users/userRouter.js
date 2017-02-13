'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');
const userModel = require('./userEntity');

/* adding details to user collection */
router.post('/add', function(req, res) {
    logger.debug(JSON.stringify(req.body));
    let user = new userModel(req.body);
    if(Object.keys(req.body).length>0)
    {
    user.save(function(err){
      if(err)
      {
        res.send('some error occurred');
      }
      else {
        res.send('User saved successfully');
      }
    });
    // res.send(user);
  }
else {
  res.send('enter details');
}
});

/* displaying all details */
router.get('/displayall', function(req, res) {

  userModel.find({}, function(err,users){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(users);
    }
  });
});

/* displaying particular detail */
router.get('/display/:user', function(req, res) {

  var name = req.params.user;
  if(name !== null)
  {
    userModel.find({name : name}, function(err,users){
    if(err)
    {
      res.send(err);
    }
    else {
      if(users.length>0)
      {
        res.send(users);
      }
      else {
        res.send('user does not exist')
      }
    }
    });
  }
  else {
    res.send('enter some data');
  }
});

/* deleting a user */
router.delete('/delete', function(req, res) {
  let user = req.body.name;
  if(user !== null)
  {
    userModel.remove({name : user}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          if(JSON.parse(users).n !== 0)
          {
            res.send('Deleted '+user+' successfully');
          }
          else {
            res.send('wrong user');
          }
        }
    });
  }
});

/* deleting all user */
router.delete('/deleteall', function(req, res) {
    userModel.remove({}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          if(Number(JSON.parse(users).n) !== 0)
          {
            res.send('Deleted all successfully');
          }
          else {
            res.send('no users');
          }
        }
    });
});

/* updating user password */
router.put('/update', function(req, res) {
  let user = req.body.name;
  let password = req.body.password;
  console.log(user + "" +password);
  if(user !== null && user !== "")
  {
    userModel.findOneAndUpdate({name : user},{$set :{password: password}}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
            if(users !== null)
            {
              res.send('Updated successfully');
            }
            else {
              res.send('user does not exist');
            }
        }
    });
  }
  else {
    res.send('enter a user');
  }
});



module.exports = router;
