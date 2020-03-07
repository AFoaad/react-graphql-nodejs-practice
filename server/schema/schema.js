const {GraphQLString , GraphQLObjectType , GraphQLID , GraphQLSchema, GraphQLInt, GraphQLList} = require('graphql');
const _ = require('lodash');

const books = [
    {
        id: '1',
        name: 'test 1',
        genre: 'test',
        authorid: '2'
    },
    {
        id: '3',
        name: 'test 2',
        genre: 'test',
        authorid: '2'
    },
    {
        id: '3',
        name: 'test 3',
        genre: 'test',
        authorid: '2'
    },
];

const authors = [
    {
        id: '1',
        name: 'test 4',
        age:66
    },
    {
        id: '2',
        name: 'test 5',
        age: 43
    },
    {
        id: '3',
        name: 'test 6',
        age: 34
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
        books: {
            type : new GraphQLList(bookType),
            resolve(parent, args){
                return null
            }
        }

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
                console.log(parent)
            }
        },
        author:{
            type : authorType,
            args:{
                
            }
        },
        books: {
            type : new GraphQLList(bookType),
            resolve(parent, args){
                return books
            }
        },
        authors: {
            type: new GraphQLList(authorType),
            resolve(){
                return authors
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query : rootQuery
})