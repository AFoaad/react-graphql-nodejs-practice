const express = require('express');
// const graphiql = require('graphql')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    // graphiql
}))
app.listen(4000, ()=> {
    console.log('object')   
})