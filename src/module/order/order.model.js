import { PostgresModel } from "../../postgres/postgres.js";

export class OrderModel {
	#_postgres;
	constructor() {
		this.#_postgres = new PostgresModel();
	}

	async addOrder({ userId, productId, address, phone }) {
		const data = await this.#_postgres.fetch(
			`
    INSERT INTO orders (user_id, product_id, address, phone) VALUES ($1, $2, $3, $4) RETURNING *
    `,
			userId,
			productId,
			address,
			phone
		);
		return data;
	}

	async retrieveAllOrders() {
		const data = await this.#_postgres.fetch(`
    SELECT * FROM orders
    `);
		return data;
	}
}
