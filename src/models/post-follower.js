export default (sequelize, DataTypes) => {
  const PostFollower = sequelize.define('postFollower', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })

  PostFollower.associate = (models) => {
    PostFollower.belongsTo(models.user)
    PostFollower.belongsTo(models.post)
  }

  return PostFollower
}
