const { Model } = require('sequelize');
const { ITEM_TYPES } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.hasMany(models.Item);
    }
  }
  List.init({
    type: {
      type: DataTypes.ENUM,
      values: ITEM_TYPES,
      allowNull: false,
      comment: 'The type of items in this list',
    },
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
