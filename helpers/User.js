'use strict';

module.exports = function(){
    return {
        SignUpValidation: (req,res,next) =>{
            req.checkBody('username','Username is required').notEmpty();
            req.checkBody('username','Username must not be less than 5').isLength({min:5});
            req.checkBody('email','email is required').notEmpty();
            req.checkBody('email','email is Invalid').isEmail();
            req.checkBody('password','password is required').notEmpty();
            req.checkBody('password','password must not be less than 5').isLength({min:5});

            req.getValidationResult()
            .then((result)=>{
                const errors = result.array();
                const messages = [];
                errors.forEach((error)=>{
                    messages.push(error.msg);
                });
             req.flash('error',messages);
             res.redirect('/signup');   
            })
            .catch((err)=>{
                return next();
            })
        },
        LogInValidation: (req,res,next) =>{
            req.checkBody('email','email is required').notEmpty();
            req.checkBody('email','email is Invalid').isEmail();
            req.checkBody('password','password is required').notEmpty();
            req.checkBody('password','password must not be less than 5').isLength({min:5});

            req.getValidationResult()
            .then((result)=>{
                const errors = result.array();
                const messages = [];
                errors.forEach((error)=>{
                    messages.push(error.msg);
                });
             req.flash('error',messages);
             res.redirect('/');   
            })
            .catch((err)=>{
                return next();
            })
        }
    }
}