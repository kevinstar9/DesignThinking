const { query } = require('express');
const express = require('express')
const router = express.Router();

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

module.exports = router