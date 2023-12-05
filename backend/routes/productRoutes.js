import express from "express";
const router= express.Router();
import { getProducts,getProductsById } from "../controllers/productController.js";
// import asyncHandler from '../middleware/asyncHandler.js';
// import Product from '../models/productModel.js';
// import products from "../data/products.js";
// import { Error } from "mongoose";

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

// router.get('/',asyncHandler(async (req,res)=>{
//     const products= await Product.find({});
//     res.json(products);
// }));

// router.get('/:id', asyncHandler(async(req,res)=>{
//     const product=await Product.findById(req.params.id);
//     // const product=products.find((p) => p._id === req.params.id);
//     if (product){
//     return res.json(product);
//     }else{
//       res.status(404);
//       throw new Error('Resource not found');
//     }
//     // res.status(404).json({message:"Product not found"});
// }));

export default router;