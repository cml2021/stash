/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    // await queryInterface.addColumn(
    //   'Items',
    //   'list_id',
    //   {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'List',
    //       key: 'id',
    //     },
    //   },
    // );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lists');
    // await queryInterface.removeColumn('Items', 'list_id');
  },
};
