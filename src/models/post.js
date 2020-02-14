export default (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Post.associate = (models) => {
    Post.belongsTo(models.user)
    Post.belongsToMany(models.user, {
      as: 'followers',
      through: models.postFollower
    })
  }

  return Post
}
