import { OrderModel } from "./order.model.js";

class OrderService {
	#_model;
	constructor() {
		this.#_model = new OrderModel();
	}

	async addOrder(payload) {
		const data = await this.#_model.addOrder({ ...payload });
		return data;
	}

	async retrieveAllOrders() {
		const data = await this.#_model.retrieveAllOrders();
		return data;
	}

	async retrieveOrdersById(id) {
		const allOrders = await this.#_model.retrieveAllOrders();
		const UserOrders = allOrders.filter((or) => or.user_id == id);
		return UserOrders;
	}
}

export default new OrderService();
