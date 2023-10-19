const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const { ITEM_TYPES } = require('../constants')

class Item extends Model {}

Item.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING, // varchar 255,
    allowNull: false,
    comment: 'The item\'s name'
  },
  type: {
    type: DataTypes.ENUM,
    values: ITEM_TYPES,
    allowNull: false,
    comment: 'The item\'s type'
  }
}, {
  sequelize,
  modelName: 'Item'
});
