module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('post')
  }
}
