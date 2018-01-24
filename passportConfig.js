var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./configAuth');

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID : config.googleAuth.clientID,
        clientSecret : config.googleAuth.clientSecret,
        callbackURL : config.googleAuth.callbackURL,

    },

    function (acessToken, refreshToke, profile, done){
        return done(null, profile);
    })),

    passport.serializeUser(function(user, cb) {
        cb(null, user);
      });

      passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
      });

    
}
