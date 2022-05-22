const express= require('express');
const router= express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input type="text" id="username" name="title" placeholder="Enter username"><button type="submit">Login</button></form>');
});

module.exports= router;