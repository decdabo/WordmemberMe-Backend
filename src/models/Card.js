import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

export const Card = sequelize.define('cards', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  word: {
    type: DataTypes.STRING
  },
  quotesContext: {
    type: DataTypes.STRING
  },
  meaning: {
    type: DataTypes.STRING
  },
  isLerned: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});
