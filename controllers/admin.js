'use strict';

module.exports = function(_,passport,User){
    return {
        setRouting: function(router){
            router.get('/dashboard',this.adminPage);
            router.post('/dashboard',this.postDashboard);
        },
        adminPage:function(req,res){
            res.render('admin/dashboard');
        },
        postDashboard:function(req,res){

        }
    }
};