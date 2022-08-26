import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

dotenv.config();
const { JWT_SECRET } = process.env;

const OPTIONS = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

export const generateToken = (object, options = OPTIONS) => { 
  return new Promise((resolve, reject) => {
    jwt.sign(object, JWT_SECRET, options, (error, payload) => {
      if (error) return reject(error);
      return resolve(payload);
    });
  })
}
  
export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, payload) => {
      if (error) return reject(error);
      return resolve(payload);
    });
  })
}
