const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../server/users/userEntity');
const connectFlash = require('connect-flash');

passport.use(new LocalStrategy(function(username, password, cb) {
  users.find({},{username: username}, function(err, user)
  {
  //  console.log("pppp"+user);
    if (err) { return cb(err); }
    if (!user) {return cb(null, false); }
    if (user.password != password) {return cb(null, false); }
    return cb(null, user);
  });
}));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, done) {
  console.log('serializeUser');
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
console.log("deserializeUser")
users.findById(id, function(err, user) {
  done(err, user);
});
});

module.exports = passport;
