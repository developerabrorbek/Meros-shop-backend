import { Router } from "express";
import ProductController from "./product.controller.js";
import { ValidateSchemaMiddleware } from "../../middleware/validate-schema.middleware.js";
import { ProductSchema } from "./dtos/product.dto.js";
import { ProductUpdateSchema } from "./dtos/product-update.dto.js";
import { upload } from "../../config/multer.config.js";

export const ProductRoutes = Router()
	.post(
		"/add",
		[upload.array("images"), ValidateSchemaMiddleware(ProductSchema)],
		ProductController.addProduct
	)
	.get("/all", ProductController.retrieveAllProducts)
	.get("/category/:id", ProductController.retrieveProductsByCategory)
	.get("/search/", ProductController.retrieveProductsBySearch)
	.get("/:id", ProductController.retrieveProductsById)
	.get("/", ProductController.retrieveProductsByLimit)
	.patch(
		"/edit/:id",
		ValidateSchemaMiddleware(ProductUpdateSchema),
		ProductController.updateProduct
	)
	.delete("/delete/:id", ProductController.deleteProduct);
