const faker = require('faker')
const _ = require('lodash')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', _.times(500).map((i) => ({
      id: i + 1,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      userId: faker.random.number({ min: 1, max: 100 }),
      createdAt: new Date()
    })))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post', null, {})
  }
}
