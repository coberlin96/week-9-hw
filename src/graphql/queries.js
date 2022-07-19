const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType, TagType } = require('./types')
const { User, Post, Tag } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in database',
    resolve(parent, args){
        return User.find()
    }
}

const user = {
    type: UserType,
    description: 'Query user by ID',
    args:{
        id: {type: GraphQLString}
    },
    async resolve(parent, args){
        return User.findById(args.id)
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: 'Query all posts in database',
    resolve(parent, args){
        return Post.find()
    }
}

const post = {
    type: PostType,
    description: 'Query post by ID',
    args:{
        id: {type: GraphQLString}
    },
    async resolve(parent, args){
        return Post.findById(args.id)
    }
}

const tags = {
    type: new GraphQLList(TagType),
    description: 'Query all tags in database',
    resolve(parent, args){
        return Tag.find()
    }
}

const tag = {
    type: TagType,
    description: 'Query tag by ID',
    args:{
        id: {type: GraphQLString}
    },
    async resolve(parent, args){
        return Tag.findById(args.id)
    }
}

module.exports = { users, user, posts, post, tag, tags}