import { BaseException } from "./base.exception.js";

export class ConflictException extends BaseException{
  constructor(message){
    super()
    this.message = message
    this.status = 409
  }
}