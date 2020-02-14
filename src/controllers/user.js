export const findAll = (_, args, context) => context.models.user.findAll()

export const findById = (_, args, context) => context.models.user.findByPk(args.id)

export const findPostsByUser = (obj) => obj.getPosts()
