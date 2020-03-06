const {GraphQLString , GraphQLObjectType , GraphQLID , GraphQLSchema, GraphQLInt} = require('graphql');
const _ = require('lodash');

const books = [
    {
        id: '1',
        name: 'test 1',
        genre: 'test'
    },
    {
        id: '3',
        name: 'test 2',
        genre: 'test'
    },
    {
        id: '3',
        name: 'test 3',
        genre: 'test'
    },
];

const authors = [
    {
        id: '1',
        name: 'test 4',
        age: ''
    },
    {
        id: '3',
        name: 'test 5',
        genre: 'test'
    },
    {
        id: '3',
        name: 'test 6',
        genre: 'test'
    },
];


const bookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=> ({
        id : {type : GraphQLID},
        name: {type : GraphQLString},
        genre: {type: GraphQLString},

    })
})
const authorType = new GraphQLObjectType({
    name: 'author',
    fields: ()=> ({
        id : {type : GraphQLID},
        name: {type : GraphQLString},
        age: {type: GraphQLInt},

    })
})


const rootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        book:{
            type :bookType,
            args: {
                id: {
                    type : GraphQLID
                }
            },
            resolve(parent, args){
                // GET data from db
            }
        },
        author:{
            type : authorType,
            args:{
                
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query : rootQuery
})