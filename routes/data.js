const express=require('express');
const router=express.Router();


router.get('/',(req,res,next)=>{
    const body = [];
    req.on('data',(chunk) =>{
        console.log(chunk);
         body.push(chunk);
    });
   return req.on('end', () => {
        const parsedBody= Buffer.concat(body).toString();
        const message= parsedBody.split('=')[1];

})});
module.exports=router;