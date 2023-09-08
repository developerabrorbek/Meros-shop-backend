import CategoryService from "./category.service.js";

class CategoryController {
	async addCategory(req, res, next) {
		try {
			const { name } = req.body;
			await CategoryService.addCategory(name);
			return res.status(201).send({
				success: true,
				message: "Category added successfully",
			});
		} catch (err) {
			next(err);
		}
	}

	async retrieveAllCategories(_, res, next) {
		try {
			const data = await CategoryService.retrieveAllCategories();
			return res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllCategoriesTree(_, res, next) {
		try {
			const data = await CategoryService.retrieveAllCategoriesTree();
			return res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async updateCategory(req, res, next) {
		try {
			const { name } = req.body;
			const { id } = req.params;
			const data = await CategoryService.updateCategory(name, id);
			return res.send({
				success: true,
				message: "Category updated successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async deleteCategory(req, res, next) {
		try {
			const { id } = req.params;
			const data = await CategoryService.deleteCategory(id);
			return res.send({
				success: true,
				message: "Category deleted successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async addSubCategory(req, res, next) {
		try {
			const { name, parentId } = req.body;
			const data = await CategoryService.addSubCategory(name, parentId);
			return res.status(201).send({
				success: true,
				message: "SubCategory added successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllSubCategories(req, res, next) {
		try {
			const data = await CategoryService.retrieveAllSubCategories();
			return res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllSubCategoriesTree(req, res, next) {
		try {
			const data = await CategoryService.retrieveAllSubCategoriesTree();
			return res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async updateSubCategory(req, res, next) {
		try {
			const { name } = req.body;
			const { id } = req.params;
			const data = await CategoryService.updateSubCategory(name, id);
			return res.send({
				success: true,
				message: "SubCategory updated successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async deleteSubCategory(req, res, next) {
		try {
			const { id } = req.params;
			const data = await CategoryService.deleteSubCategory(id);
			return res.send({
				success: true,
				message: "SubCategory deleted successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async addDoubleSubCategory(req, res, next) {
		try {
			const { name, parentId } = req.body;
			const data = await CategoryService.addDoubleSubCategory(
				name,
				parentId
			);
			return res.status(201).send({
				success: true,
				message: "DoubleSubCategory added successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllDoubleSubCategories(req, res, next) {
		try {
			const data = await CategoryService.retrieveAllDoubleSubCategories();
			return res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllDoubleSubCategoriesTree(req, res, next) {
		try {
			const data =
				await CategoryService.retrieveAllDoubleSubCategoriesTree();
			return res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async updateDoubleSubCategory(req, res,next) {
		try {
			const { name } = req.body;
			const { id } = req.params;
			const data = await CategoryService.updateDoubleSubCategory(
				name,
				id
			);
			return res.send({
				success: true,
				message: "DoubleSubCategory updated successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async deleteDoubleSubCategory(req, res,next) {
		try {
			const { id } = req.params;
			const data = await CategoryService.deleteDoubleSubCategory(id);
			return res.send({
				success: true,
				message: "DoubleSubCategory deleted successfully",
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new CategoryController();
