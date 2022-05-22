const express=require('express');
const data=require('./data');
const router=express.Router();

router.get(`/`,(req,res,next)=>{
    res.send(`<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
    method="POST"><input id="message" type="text" name="message" placeholder="Enter message">
    <input type="hidden" name="username" id="username"><button type="submit">Send Message</button></form>`);
});
router.post(`/`,(req,res,next)=>{
    const data=[];
    data.push(`{${req.body.username}:${req.body.message}}`);
    console.log(data);
    console.log(`${req.body.username}:${req.body.message}`);
    res.redirect(`/`);
});
module.exports= router;