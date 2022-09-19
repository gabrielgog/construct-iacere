const {buildSchema} = require('graphql');
module.exports = buildSchema(`
    type Project{
        id:ID!
        name: String!
        projectType: String!
    }
   input ProjectInputData { 
        name: String!
        projectType: String!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
   type ProjectData {
       projects: [Project!]!
   }
   type RootQuery {
       projects: ProjectData!
   }
  type RootMutation {
        createProject(projectInput:ProjectInputData): Project!
        updateProject(id: ID!, projectInput:ProjectInputData): Project!
        findProject(id: ID!): Project!
        deleteProject(id: ID!): String!
    }
`);
