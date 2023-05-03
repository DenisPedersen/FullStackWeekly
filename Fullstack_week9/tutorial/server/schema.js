const { gql } = require("apollo-server");

const typeDefs = gql`
   type Query {
     quakes: [Quake]!
     quake(id: ID!): Quake
     # Queries for the current user
     me: User
}

type Quake {
    id: ID!
    location: String
    magnitude: Float
    when: String
    time: String
}

type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    records: [Quake]
}

type Mutation {
    #If flase, saving record failed -- check errors
    saveRecord(recordId: ID!): RecordUpdateResponse!
    
    # if false, deleting record failed -- check errors
    deleteRecord(recordId: ID!): RecordUpdateResponse!

    login(email: String): String #login token
}

type RecordUpdateResponse {
    succes: Boolean!
    message: String
    records: [Quake]
}
`;

module.exports = typeDefs;