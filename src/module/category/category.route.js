import { Router } from "express";
import CategoryController from "./category.controller.js";
import { ValidateSchemaMiddleware } from "../../middleware/validate-schema.middleware.js";
import { CategorySchema } from "./dtos/category.dto.js";
import { SubCategorySchema } from "./dtos/subcategory.dto.js";
import { DoubleSubCategorySchema } from "./dtos/double-subcategory.dto.js";
import { SubCategoryEditSchema } from "./dtos/subcategory-edit.dto.js";
import { DoubleSubCategoryEditSchema } from "./dtos/double-subcategory-edit.dto.js";

export const CategoryRoutes = Router()
	.post(
		"/add",
		ValidateSchemaMiddleware(CategorySchema),
		CategoryController.addCategory
	)
	.get("/all", CategoryController.retrieveAllCategories)
	.get("/all/tree", CategoryController.retrieveAllCategoriesTree)
	.patch(
		"/edit/:id",
		ValidateSchemaMiddleware(CategorySchema),
		CategoryController.updateCategory
	)
	.delete("/delete/:id", CategoryController.deleteCategory)

	.post(
		"/subcategory/add",
		ValidateSchemaMiddleware(SubCategorySchema),
		CategoryController.addSubCategory
	)
	.get("/subcategory/all", CategoryController.retrieveAllSubCategories)
	.get("/subcategory/all/tree", CategoryController.retrieveAllSubCategoriesTree)

	.patch(
		"/subcategory/edit/:id",
		ValidateSchemaMiddleware(SubCategoryEditSchema),
		CategoryController.updateSubCategory
	)
	.delete("/subcategory/delete/:id", CategoryController.deleteSubCategory)

	.post(
		"/double-subcategory/add",
		ValidateSchemaMiddleware(DoubleSubCategorySchema),
		CategoryController.addDoubleSubCategory
	)
	.get(
		"/double-subcategory/all",
		CategoryController.retrieveAllDoubleSubCategories
	)
	.get(
		"/double-subcategory/all/tree",
		CategoryController.retrieveAllDoubleSubCategoriesTree
	)
	.patch(
		"/double-subcategory/edit/:id",
		ValidateSchemaMiddleware(DoubleSubCategoryEditSchema),
		CategoryController.updateDoubleSubCategory
	)
	.delete(
		"/double-subcategory/delete/:id",
		CategoryController.deleteDoubleSubCategory
	);
