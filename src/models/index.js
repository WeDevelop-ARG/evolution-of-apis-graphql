import path from 'path'
import fs from 'fs'
import Sequelize from 'sequelize'

const sequelize = new Sequelize(require('~/src/config/sequelize')())
const sequelizeModels = {}

// Load all models
fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    sequelizeModels[model.name] = model
  })

Object.keys(sequelizeModels)
  .forEach((modelName) => {
    if ('associate' in sequelizeModels[modelName]) {
      sequelizeModels[modelName].associate(sequelizeModels)
    }

    if ('addScopes' in sequelizeModels[modelName]) {
      sequelizeModels[modelName].addScopes(sequelizeModels)
    }
  })

sequelizeModels.sequelize = sequelize
module.exports = sequelizeModels
