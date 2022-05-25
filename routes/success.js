const path=require('path');
const express= require('express');
const productsController=require('../controllers/product');
const router= express.Router();

router.get('/success', productsController.getFormSuccess);

module.exports= router;
