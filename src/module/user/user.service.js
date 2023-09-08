import { UserModel } from "./user.model.js";

class UserService {
	#_model;
	constructor() {
		this.#_model = new UserModel();
	}

	async addUser(payload) {
		const [data] = await this.#_model.addUser({ ...payload });
		return data;
	}

	async updateUser(payload) {
		const data = await this.#_model.updateUser({ ...payload });
		return data;
	}

	async retrieveAllUsers() {
		const data = await this.#_model.retrieveAllUsers();
		return data;
	}

	async retrieveSingleUser(id) {
		const data = await this.#_model.retrieveAllUsers();
		const user = data.filter(u => u.id == id)
		return user;
	}

	async deleteUser(id) {
		const [data] = await this.#_model.deleteUser(id);
		return data;
	}
}

export default new UserService();
