const products=[];
const forms=[];

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req,res,next)=>{
    products.push({ title: req.body.title});
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.render('shop',{
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length>0,
        activeShop: true,
        productsCSS: true
    })
}

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