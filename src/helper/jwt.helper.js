import jwt from "jsonwebtoken"
import { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } from "../config/jwt.config.js"
import { ACCESS_TOKEN_EXPIRE_TIME, REFRESH_TOKEN_EXPIRE_TIME } from "../constant/jwt.constant.js"

export const generateTokens = ({id, role = "user"}) => {
  const accessToken = jwt.sign({id,role}, ACCESS_TOKEN_SECRET_KEY, {expiresIn : ACCESS_TOKEN_EXPIRE_TIME})
  const refreshToken = jwt.sign({id,role}, REFRESH_TOKEN_SECRET_KEY, { expiresIn : REFRESH_TOKEN_EXPIRE_TIME})

  return {accessToken, refreshToken}
}