/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Items',
      'list_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
          key: 'id',
        },
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Items', 'list_id');
  },
};
