import { PAGE_NUMBER, PRODUCT_COUNT } from "./product.constant.js";
import { ProductModel } from "./product.model.js";

class ProductService {
	#_model;
	constructor() {
		this.#_model = new ProductModel();
	}

	async addProduct({
		title,
		price,
		description,
		year,
		categoryId,
		count,
		filePaths,
	}) {
		const [data] = await this.#_model.addProduct({
			title,
			price,
			description,
			year,
			categoryId,
			count,
		});
		for (let i = 0; i < filePaths.length; i++) {
			const [image] = await this.#_model.addImages(filePaths[i], data.id);
		}
		return data;
	}

	async updateProduct(payload) {
		const data = await this.#_model.updateProduct({ ...payload });
		return data;
	}

	async removeProduct(id) {
		const data = await this.#_model.deleteProduct(id);
		return data;
	}

	async retrieveAllProducts() {
		const data = await this.#_model.retrieveAllProducts();
		return data;
	}

	async retrieveProductsByLimit(page = PAGE_NUMBER, size = PRODUCT_COUNT) {
		const data = await this.#_model.retrieveProductsByLimit(
			size,(page - 1) * size
		);
		return data;
	}

	async retrieveProductsBySearch(text) {
		const data = await this.#_model.retrieveProductsBySearch(text);
		return data;
	}

	async retrieveProductsByCategory(categoryId) {
		const data = await this.#_model.retrieveAllProducts();
		const filteredData = data.filter((p) => p.category_id == categoryId);
		return filteredData;
	}

	async retrieveProductById(id) {
		const data = await this.#_model.retrieveAllProducts();
		const filteredData = data.filter((p) => p.id == id);
		return filteredData;
	}
}

export default new ProductService();
