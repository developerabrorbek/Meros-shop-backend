import { BaseException } from "./base.exception.js";

export class UnauthorizedException extends BaseException{
  constructor(message){
    super()
    this.message = message
    this.status = 401
  }
}