const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Sales = require('../models/sales')

router.get('/shippedProducts/:customerNumber', asyncHandler(async function (req, res, next) {
    const customerNumber = parseInt(req.params.customerNumber);

    const orders = await Sales.find({customerNumber: customerNumber, status: 'Shipped'});
    if(orders){
        res.json(orders)
    }else{
        res.status(404).json({message:'Product not found'})
    }
}))

router.get('/allProducts/:customerNumber/json', asyncHandler(async function (req, res, next) {
    const customerNumber = parseInt(req.params.customerNumber);

    const orders = await Sales.find({customerNumber: customerNumber});
    if(orders){
        res.json(orders)
    }else{
        res.status(404).json({message:'Product not found'})
    }
}))

// router.get('/shippedProducts/:customerNumber/total/json', asyncHandler(async function (req, res, next) {
//     const customerNumber = parseInt(req.params.customerNumber);
//
//     const orders = await Sales.find({customerNumber: customerNumber, status: 'Shipped'});
//     if(orders){
//         res.json(orders)
//     }else{
//         res.status(404).json({message:'Product not found'})
//     }
// }))
module.exports = router;