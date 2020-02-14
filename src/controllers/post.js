export const findFollowers = (obj) => obj.getFollowers()

export const findUser = (obj) => obj.getUser()

export const findById = (_, args, context) => context.models.post.findByPk(args.id)
