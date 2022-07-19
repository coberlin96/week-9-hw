const { GraphQLObjectType, GraphQLInputObjectType, GraphQLID,
    GrahpQLString, GraphQLList, GraphQLInt, GraphQLBoolean,
    GraphQLFloat,
    GraphQLString} = require ('graphql')
const { Post, Tag, User } = require('../models');

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User Type',
    fields: () =>({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        hamdle: { type: GraphQLString },
        posts:{ 
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userId: parent.id})
            }   
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post Type',
    fields: ()=>({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
        date: { type: GraphQLString },
        userID: { type: GraphQLString },
        user:{
            type: UserType,
            resolve(parent, args){
                return User.findById(parent.userID)
            }
        },
        tags:{
            type: new GraphQLList(TagType),
            resolve(parent, args){
                return Tag.find(parent.userID)
            }
        }
    })
})

const TagType = new GraphQLInputObjectType({
    name: 'Tag',
    description: 'Tag Type',
    fields:()=>({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        posts:{
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return Post.find(parent.userID)
            }
        }
    })
})