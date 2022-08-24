import Sequelize from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const { DATABASE_LOCAL, DATABASE_URL, NODE_ENV } = process.env;
let DB = '';

switch (NODE_ENV) {
  case 'development':
    DB=DATABASE_LOCAL;    
  case 'production':
    DB=DATABASE_URL;
  default:
    DB=DATABASE_LOCAL;
}

const sequelize = new Sequelize(DB, {
    host: 'localhost',
    dialect: 'postgres'
  }
);

export default sequelize;
