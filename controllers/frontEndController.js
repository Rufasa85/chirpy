const express = require('express');
const router = express.Router();
const {Chirp,User} = require('../models');

router.get("/",(req,res)=>{
    Chirp.findAll({
        include:[User]
    }).then(chirpData=>{
        console.log(chirpData)
        const hbsChirps = chirpData.map(chirp=>chirp.toJSON())
        console.log('==============================')
        console.log(hbsChirps)
        res.render("home",{
            allChirps:hbsChirps
        })
    })
})
router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/signup",(req,res)=>{
    res.render("signup")
})
router.get("/profile",(req,res)=>{
    res.render("profile")
})

module.exports = router;