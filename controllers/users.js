'use strict';

module.exports = function(_,passport,User){
    return {
        setRouting: function(router){
            router.get('/',this.indexPage);
            router.get('/signup',this.getSignUp);
            router.get('/home',this.homePage);

            router.post('/signup',User.SignUpValidation,this.postSignUp);
            router.post('/',User.LogInValidation,this.postLogin);
        },
        indexPage: function(req,res){
            const errors = req.flash('error');
            return res.render('index',{title:'Chat App | Login',messages:errors,hasErrors:errors.length > 0});
        },
        getSignUp:function(req,res){
            const errors = req.flash('error');
            return res.render('signup',{title:'Chat App | Signup',messages:errors,hasErrors:errors.length > 0});
        },
        postSignUp: passport.authenticate('local.signup',{
            successRedirect:'/home',
            failureRedirect:'/signup',
            failureFlash:true
        }),
        postLogin: passport.authenticate('local.signin',{
            successRedirect:'/home',
            failureRedirect:'/',
            failureFlash:true
        }),
        homePage: function(req,res){
            return res.render('home');
        }
    }
}
