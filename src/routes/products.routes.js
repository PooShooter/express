import express from "express";
import { createSingleProduct, deleteSingleProduct, getAllProducts, getProductById, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts)

router.post("/", createSingleProduct)

router.delete("/:id", deleteSingleProduct)

router.put("/:id", updateProduct)

router.get("/:id", getProductById)

export default router;
