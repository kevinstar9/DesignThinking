const { query } = require('express');
const express = require('express')
const router = express.Router();
const db = require('../model/db');

router.get("/", function(req,res) {
    res.render('main') //그림 파일 전달
})

router.get("/todayquestion", function(req,res){
    res.render('todayQuestion') 
})

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body)
    res.send('POST API')
})

router.get("/data/create",function(req,res) {
    let user_id = parseInt(Math.random() * 10000)
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200})
    })
})

router.get("/data/read", function(req,res){
    db.users.findAll().then(function(result){
        res.send({success:200, data:result})
    })
})

module.exports = router