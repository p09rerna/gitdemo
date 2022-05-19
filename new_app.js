const express = require('express');
const adminRoutes= require('./routes/admin.js');
const shopRoutes= require('./routes/shop.js');
const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(9100);