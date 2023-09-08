import { BaseException } from "./base.exception.js";

export class NotFoundException extends BaseException{
  constructor(message){
    super()
    this.message = message
    this.status = 404
  }
}