import { PostgresModel } from "../../postgres/postgres.js";

export class UserModel {
	#_pg;
	constructor() {
		this.#_pg = new PostgresModel();
	}

	async addUser({ name, email, password, phone, role }) {
		const data = await this.#_pg.fetch(
			`
    INSERT INTO users (name, email, password, phone, role) VALUES ($1, $2, $3, $4, $5)
    `,
			name,
			email,
			password,
			phone,
			role
		);
		return data;
	}

	async updateUser({ id, name, email, password, phone }) {
		const data = await this.#_pg.fetch(`
    UPDATE users 
    SET 
      name = (CASE WHEN LENGTH($1) > 0 THEN $1 ELSE name END),
      email = (CASE WHEN LENGTH($2) > 0 THEN $2 ELSE email END),
      password = (CASE WHEN LENGTH($3) > 0 THEN $3 ELSE password END),
      phone = (CASE WHEN LENGTH($4) > 0 THEN $4 ELSE phone END)      
    WHERE id = $5  
    RETURNING *
    `, name, email, password, phone,id);
    return data
	}

  async retrieveAllUsers(){
    const data = await this.#_pg.fetch(`
      SELECT * FROM all_users
    `)
    return data
  }

  async deleteUser(id){
    const data = await this.#_pg.fetch(`
    DELETE FROM users WHERE id = $1
    `,id)
    return data
  }
}
