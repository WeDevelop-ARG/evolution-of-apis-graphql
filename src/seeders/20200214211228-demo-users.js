const faker = require('faker')
const _ = require('lodash')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', _.times(100).map((i) => ({
      id: i + 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      createdAt: new Date()
    })))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
}
