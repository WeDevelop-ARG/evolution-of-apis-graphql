import * as userController from '~/src/controllers/user'

export default {
  Query: {
    users: userController.findAll,
    user: userController.findById
  },
  User: {
    posts: userController.findPostsByUser
  }
}
