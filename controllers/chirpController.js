const express = require('express');
const router = express.Router();
const {User,Chirp} = require('../models');

router.get("/",(req,res)=>{
   Chirp.findAll().then(chirpData=>{
    res.json(chirpData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
router.get("/:id",(req,res)=>{
   Chirp.findByPk(req.params.id,{
    include:[User]
   }).then(chirpData=>{
    res.json(chirpData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
router.post("/",(req,res)=>{
    console.log(req.body);
   Chirp.create({
    chirp:req.body.chirp,
    UserId:req.body.UserId
   }).then(chirpData=>{
    res.json(chirpData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})

module.exports = router;