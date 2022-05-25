const express = require('express');
const adminRoutes= require('./routes/admin.js');
const shopRoutes= require('./routes/shop.js');
const contactRoutes=require('./routes/contactus.js');
const sRoutes=require('./routes/success.js');
const bodyParser= require('body-parser');
const app= express();
const path=require('path');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(sRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','page.html'));
});
app.listen(9100);