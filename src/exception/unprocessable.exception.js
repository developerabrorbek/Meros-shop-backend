import { BaseException } from "./base.exception.js";

export class UnprocessableException extends BaseException{
  constructor(message){
    super()
    this.message = message
    this.status = 422
  }
}