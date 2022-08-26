import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

const OPTIONS = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

export const generateToken = (object, options = OPTIONS) => { 
  new Promise((resolve, reject) => {
    jwt.sign(object, JWT_SECRET, options, (error, payload) => {
      if (error) return reject(error);
      return resolve(payload);
    });
  })
}
  
export const checkToken = (token) => {
  new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, payload) => {
      if (error) return reject(error);
      return resolve(payload);
    });
  })
}
