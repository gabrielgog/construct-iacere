const {buildSchema} = require('graphql');
module.exports = buildSchema(`
    type User{
        id:ID!
        firstName: String!
        lastName: String!
        role: String!
        password: String!
        phoneNumber: String!
    }
   input UserInputData { 
       firstName: String!
        lastName: String!
        role: String!
        password: String!
        phoneNumber: String!
    }
    input LoginInput{
        password: String!
        phoneNumber: String!
    }
    type LoginOutput{
        user: User
        token: String
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
   type UserData {
       users: [User!]!
   }
   type RootQuery {
       users: UserData!
   }
  type RootMutation {
        createUser(userInput:UserInputData): User!
        updateUser(id: ID!, userInput:UserInputData): User!
        findUser(id: ID!): User!
        deleteUser(id: ID!): String!
        loginUser(loginInput: LoginInput): LoginOutput!
    }
`);
