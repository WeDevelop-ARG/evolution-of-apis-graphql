module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
}
