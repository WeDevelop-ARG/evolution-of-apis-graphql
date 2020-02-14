require('dotenv').config()

module.exports = () => {
  return {
    dialect: 'sqlite',
    storage: 'db.slite',
    define: {
      freezeTableName: true
    }
  }
}
