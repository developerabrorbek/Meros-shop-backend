import { PostgresModel } from "../../postgres/postgres.js";

export class ProductModel {
	#_pg;
	constructor() {
		this.#_pg = new PostgresModel();
	}

	async retrieveAllProducts() {
		const data = await this.#_pg.fetch(`
    SELECT * FROM products_with_images;
    `);
		return data;
	}

	async addProduct({ title, price, description, year, count, categoryId }) {
		const data = await this.#_pg.fetch(
			`
    INSERT INTO product (title, price, description, year, count, category_id) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *
    `,
			title,
			price,
			description,
			year,
			count,
			categoryId
		);
		return data;
	}

	async retrieveProductsByLimit(limit, offset) {
		const data = await this.#_pg.fetch(
			`
    SELECT * FROM product ORDER BY id LIMIT $1 OFFSET $2
    `,
			limit,
			offset
		);
		return data;
	}

	async retrieveProductsBySearch(title) {
		const data = await this.#_pg.fetch(
			`
    SELECT * FROM product WHERE title ILIKE $1
    `,
			`%${title}%`
		);
		return data;
	}

	async updateProduct({
		title,
		price,
		description,
		year,
		count,
		categoryId,
		id,
	}) {
		const data = await this.#_pg.fetch(
			`
    UPDATE product 
    SET 
      title = (CASE WHEN LENGTH($1) > 0 THEN $1 ELSE title END),
      price = (CASE WHEN LENGTH($2) > 0 THEN $2 ELSE price END),
      description = (CASE WHEN LENGTH($3) > 0 THEN $3 ELSE description END),
      year = (CASE WHEN $4 > 0 THEN $4 ELSE year END),
      count = (CASE WHEN $5 > 0 THEN $5 ELSE count END),
      category_id = (CASE WHEN $6 > 0 THEN $6 ELSE category_id END)
    WHERE id = $7
    RETURNING *
    `,
			title,
			price,
			description,
			year,
			count,
			categoryId,
			id
		);

		return data;
	}

	async addImages(link, productId) {
		const data = await this.#_pg.fetch(
			`
    INSERT INTO images (link, product_id) VALUES ($1, $2) RETURNING id
    `,
			link,
			productId
		);
		return data;
	}

	async deleteProduct(id) {
		const data = await this.#_pg.fetch(
			`
    DELETE FROM product CASCADE WHERE id = $1  
    `,
			id
		);
		return data;
	}
}
