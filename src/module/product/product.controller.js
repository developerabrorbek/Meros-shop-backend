import path from "path";
import ProductService from "./product.service.js";

class ProductController {
	async addProduct(req, res, next) {
		try {
			const filePaths = req.files.map((e, i) =>
				path
					.join(process.cwd(), "public/images", req.files[i].filename)
					.split("\\")
					.join("/")
			);
			const data = await ProductService.addProduct({
				...req.body,
				filePaths,
			});
			res.status(201).send({
				success: true,
				message: "Product created successfully",
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async updateProduct(req, res, next) {
		try {
			const { id } = req.params;
			const data = await ProductService.updateProduct({
				...req.body,
				id,
			});
			res.status(201).send({
				success: true,
				message: "Product updated successfully",
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async deleteProduct(req, res, next) {
		try {
			const { id } = req.params;

			const data = await ProductService.removeProduct(id);
			res.send({
				success: true,
				message: "Product deleted successfully",
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllProducts(req, res, next) {
		try {
			const data = await ProductService.retrieveAllProducts();
			res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveProductsByLimit(req, res, next) {
		try {
			const { page, size } = req.query;

			const data = await ProductService.retrieveProductsByLimit(
				page,
				size
			);

			return res.send({
				success: true,
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveProductsBySearch(req, res, next) {
		try {
			const { title } = req.query;
			const data = await ProductService.retrieveProductsBySearch(title);

			return res.send({
				success: true,
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveProductsByCategory(req, res, next) {
		try {
			const { id } = req.params;
			const data = await ProductService.retrieveProductsByCategory(id);
			res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveProductsById(req, res, next) {
		try {
			const { id } = req.params;
			const data = await ProductService.retrieveProductById(id);
			res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new ProductController();
