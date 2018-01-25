

module.exports = function(app, passport){
    app.get('/login/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/login/google/return',
         passport.authenticate('google', { successRedirect:'/login/verificar-user-google',failureRedirect: '/'
    		}));
    // -- Add function para verificar se o usuário está logado--

    // verificar-user-google - verificar ?
    app.get('/login/verificar-user-google', function(req, res){
        res.redirect('/login/google/index');
    });

    // render main page
    app.get('/login/google/index', function(req, res){
        res.render('views/logado/indexLogado.ejs');
    });
}
