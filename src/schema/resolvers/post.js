import * as postController from '~/src/controllers/post'

export default {
  Query: {
    post: postController.findById
  },
  Post: {
    followers: postController.findFollowers,
    user: postController.findUser
  }
}
