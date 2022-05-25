const path=require('path');
const express= require('express');
const productsController=require('../controllers/product');

router.get('/',productsController.getProducts);

module.exports=router;