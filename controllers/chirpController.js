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

//TODO: protect this route so only logged in users can chirp
router.post("/",(req,res)=>{
    console.log(req.body);
   Chirp.create({
    chirp:req.body.chirp,
    //TODO: read userid from session data instead of from req.body
    UserId:req.body.UserId
   }).then(chirpData=>{
    res.json(chirpData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})

//TODO: BONUS: add a protected route to delete a chirp (/api/chirps/:id) so that only the user who created the chirp can delete it

module.exports = router;