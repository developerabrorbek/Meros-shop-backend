import pg from "pg"
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_SERVER, DB_USER } from "../config/db.config.js";


export class PostgresModel {
  
  #_pg;
  constructor(){
    this.#_pg = new pg.Pool({
      user : DB_USER,
      password : DB_PASSWORD,
      host : DB_SERVER,
      database : DB_DATABASE,
      port : DB_PORT,
    })
  }

  async fetch(SQL, ...params){
    const client = await this.#_pg.connect()
    try{
      const { rows } = await client.query(SQL, params.length ? params : null)
      return rows
    } catch(err){
      throw new Error(err.message)
    } finally{
      client.release()
    }
  }
}