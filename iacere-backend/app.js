const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const userSchema = require('./schema/UserSchema');
const userResolver = require('./graphql/userResolver');
const projectResolver = require('./graphql/projectResolver')
const projectSchema = require('./schema/ProjectSchema');
const bcrypt = require("bcrypt");
const User = require("./models/User");

const app = express();
app.listen(8080, async (uri, callback) => {
    console.log("Server is running ", 8080)
    await mongoose.connect("mongodb://localhost:27017/iacere", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    const answer = await User.exists({phoneNumber: "09087654321"})
    if(!answer){
        const salt = bcrypt.genSaltSync()
        const encryptedPassword = bcrypt.hashSync("ofugog5050##", salt)
        const user = new User({
            firstName: "Gabriel",
            lastName: "Godwin",
            phoneNumber: "09087654321",
            password: encryptedPassword,
            role: "admin"
        });
        await user.save()
    }
});
app.use(bodyParser.json());

mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);
app.use(
    '/users',
    graphqlHTTP({
        schema: userSchema,
        rootValue: userResolver,
        graphiql: true,
    })
);
app.use(
    '/projects',
    graphqlHTTP({
        schema: projectSchema,
        rootValue: projectResolver,
        graphiql: true,
    })
);
