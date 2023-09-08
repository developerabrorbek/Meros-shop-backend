import { PostgresModel } from "../../postgres/postgres.js";

export class AuthModel{
  #_pg;

  constructor(){
    this.#_pg = new PostgresModel()
  }

  async retrieveUser(id){
    const [user] = await this.#_pg.fetch(`
    SELECT * FROM users WHERE id = $1
    `,id)
    return user
  }

  async signIn({phone, password}){
    await this.#_pg.fetch(`
    UPDATE users SET deleted_at = NULL WHERE phone = $1 AND password = $2
    `,phone,password)
    const data = await this.#_pg.fetch(`
    SELECT * FROM users WHERE phone = $1 AND password = $2
    `,phone, password)
    return data
  }


  async signUp({name, email, phone, password, role = "user"}){
    const data = await this.#_pg.fetch(`
    INSERT INTO users (name, email, phone, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *
    `, name, email, phone, password,role)
    return data
  }

  async signTokens({accessToken, refreshToken, id}){
    const data = await this.#_pg.fetch(`
    UPDATE users SET access_token = $1, refresh_token = $2 WHERE id = $3 RETURNING *
    `, accessToken, refreshToken, id)
    return data
  }

  async signOut(id){
    const data = await this.#_pg.fetch(`
    UPDATE users SET deleted_at = NOW() WHERE id = $1 
    `,id)
  }
}