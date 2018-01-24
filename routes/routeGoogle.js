

module.exports = function(app, passport){
    app.get('/login/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/login/google/return', passport.authenticate('google', {sucessRedirect:'verificar-user-google', failureRedirect:'/'}));


}
