import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import { Card } from './Card.js';

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  password: {
    type: DataTypes.STRING
  }
});

User.hasMany(Card, {
  foreignKey: 'userId',
  sourceKey: 'id'
})

Card.belongsTo(User, {
  foreignKey: 'userId',
  targetId: 'id'
})
