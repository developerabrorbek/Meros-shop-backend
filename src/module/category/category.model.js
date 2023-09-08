import { PostgresModel } from "../../postgres/postgres.js";

export class CategoryModel {
	#_pg;
	constructor() {
		this.#_pg = new PostgresModel();
	}

	async addCategory(name) {
		const data = await this.#_pg.fetch(
			`
    INSERT INTO category (name) VALUES ($1)
    `,
			name
		);
		return data;
	}

	async retrieveAllCategoriesTree() {
		const data = await this.#_pg.fetch(`
		SELECT * FROM all_categories_with_products
		
    `);
		return data;
	}

	async retrieveAllCategories() {
		const data = await this.#_pg.fetch(`
		SELECT * FROM category
		
    `);
		return data;
	}

	async updateCategory(name, id) {
		const data = await this.#_pg.fetch(
			`
    UPDATE category SET name = $1 WHERE id = $2
    `,
			name,
			id
		);
		return data;
	}

	async deleteCategory(id) {
		const data = await this.#_pg.fetch(`
    DELETE FROM category WHERE id = $1
    ,id`);
		return data;
	}

	async addSubCategory(name, parentId) {
		const data = await this.#_pg.fetch(
			`
    INSERT INTO sub_category (name, parent_id) VALUES ($1, $2)
    `,
			name,
			parentId
		);
		return data;
	}

	async retrieveAllSubCategoriesTree() {
		const data = await this.#_pg.fetch(`
				SELECT * FROM sub_category_with_products
    `);
		return data;
	}

	async retrieveAllSubCategories() {
		const data = await this.#_pg.fetch(`
				SELECT * FROM sub_category
    `);
		return data;
	}

	async updateSubCategory(name, id) {
		const data = await this.#_pg.fetch(`
    UPDATE sub_category SET name = $1 WHERE id = $2 RETURNING *
    `);
		return data;
	}

	async deleteSubCategory(id) {
		const data = await this.#_pg.fetch(`
    DELETE FROM sub_category WHERE id = $1
    `);
		return data;
	}

	async addDoubleSubCategory(name, parentId) {
		const data = await this.#_pg.fetch(
			`
    INSERT INTO double_sub_category (name, parent_id) VALUES ($1, $2)
    `,
			name,
			parentId
		);
		return data;
	}

	async retrieveDoubleSubCategoriesTree() {
		const data = await this.#_pg.fetch(
			`
				SELECT * FROM category_with_product
			`
		);
		return data;
	}

	async retrieveDoubleSubCategories() {
		const data = await this.#_pg.fetch(
			`
				SELECT * FROM double_sub_category
			`
		);
		return data;
	}

	async updateDoubleSubCategory(name, id) {
		const data = await this.#_pg.fetch(
			`
    UPDATE double_sub_category SET name = $1 WHERE id = $2 RETURNING *
    `,
			name,
			id
		);
		return data;
	}

	async deleteDoubleSubCategory(id) {
		const data = await this.#_pg.fetch(
			`
    DELETE FROM double_sub_category WHERE id = $1
    `,
			id
		);
		return data;
	}
}
