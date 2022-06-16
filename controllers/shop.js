const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows, fieldData]) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(([product]) => {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
  };

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
.then(([rows, fieldData]) => {
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  });
})
.catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart= (req,res,next) =>{
  const prodId = req.body.productId;
  Product.findById(prodId,(product)=>{
    Cart.addProduct( prodId,product.price);
  }); 
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};


exports.getContact= (req,res,next)=>{
    res.render('contactus',{
        pageTitle: 'Contact Us',
        path: '/contactus',
        formsCSS: true,
        productCSS: true,
        activeForm: true
    });
}

exports.postContact= (req,res,next)=>{
    forms.push({title: req.body.title});
    res.redirect('/success');
}

exports.getFormSuccess= (req,res,next)=>{
    res.render('success',{
        pageTitle: 'Success',
        path:'/success',
        activeSuccess: true,
        productsCSS: true
    });
  }
