/**
 * @ const rout : allows middleware to return promises
 * @ const users : import user model
 */

const express  = require('express');
const rout = require('express-promise-router')();
const users  = require('../model/usermodel');



rout.route('/useradd').post(function(req,res){
    let user_save = new users(req.body);
    user_save.save()
             .then(user_save  => {
                 res.status(200).json({'user':'added'});
             })
})

/**
 * get all users data from database 
 */
rout.route('/get').get(function(req,res){
    console.log('hghgjhjhj')
    users.find(function(err,users){
        if(err){
            console.log('erro')
        }else{
            const pageCount = Math.ceil(users.length / 25); // calculate total page
            let page = parseInt(req.query.p); // request page number 
            if (!page) { page = 1;} 
            if (page > pageCount) {
                page = pageCount
            }
            res.json({
                "page": page,
                "pageCount": pageCount,
                "posts": users.slice(page * 25 - 25, page * 25)
            });
        }
    })
})




module.exports = rout;