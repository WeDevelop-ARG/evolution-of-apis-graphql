const faker = require('faker')
const _ = require('lodash')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('postFollower', _.times(1000).map((i) => ({
      id: i + 1,
      postId: faker.random.number({ min: 1, max: 500 }),
      userId: faker.random.number({ min: 1, max: 100 }),
      createdAt: new Date()
    })))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('postFollower', null, {})
  }
}
