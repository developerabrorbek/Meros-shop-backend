import { AuthModel } from "./auth.model.js";
import { generateTokens } from "../../helper/jwt.helper.js";

class AuthService{
  #_model;
  constructor(){
    this.#_model = new AuthModel()
  }

  async signUp(payload){
    const [userData] = await this.#_model.signUp({...payload})

    const tokens = generateTokens({id : userData?.id, role : userData?.role})
    const [user] = await this.#_model.signTokens({...tokens, id : userData?.id})
    return user
  }

  async signIn(payload){
    const [userData] = await this.#_model.signIn({
      phone : payload.phone,
      password : payload.password
    })

    const tokens = generateTokens({id : userData?.id, role : userData?.role})
    
    const [user] = await this.#_model.signTokens({...tokens, id : userData?.id})
    return user
  }

  async signOut(id){
    const user = await this.#_model.signOut(id)
    return user
  }


  async refresh({id, role}){
    const tokens = generateTokens({id, role})
    const [user] = await this.#_model.signTokens({...tokens, id})
    return user
  }
}

export default new AuthService()