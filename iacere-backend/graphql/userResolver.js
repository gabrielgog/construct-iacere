const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const JWT_SECRET  = "vekusabciiowhudxvsgjzxjasvhxagsheyuwtfdkesdvewsad"
module.exports = {
    createUser: async function ({userInput}) {
        const salt = bcrypt.genSaltSync()
        const encryptedPassword = bcrypt.hashSync(userInput.password, salt)
        const user = new User({
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            phoneNumber: userInput.phoneNumber,
            password: encryptedPassword,
            role: userInput.role
        });

        const answer = await User.exists({phoneNumber: user.phoneNumber})
        if (answer) {
            throw new Error("User Exist already");
        }
        const createdUser = await user.save();
        return {
            ...createdUser._doc,
            id: createdUser._id.toString(),
        };
    },
    users: async function () {
        const users = await User.find({});
        return {
            users: users.map((q) => {
                return {
                    ...q._doc,
                    id: q._id.toString(),
                };
            })
        };
    },
    updateUser: async function ({id, userInput}) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User Not found!');
        }

        user.firstName = userInput.firstName;
        user.lastName = userInput.lastName;
        user.phoneNumber = userInput.phoneNumber;
        const updatedUser = await user.save();
        return {
            ...updatedUser._doc,
            id: updatedUser._id.toString(),
        };
    },
    deleteUser: async function ({id}) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User Not found!');
        }
        await User.findByIdAndRemove(id);
        return "USER_DETAILS_DELETED_SUCCESSFULLY"
    },

    findUser: async function ({id}) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User Not found!');
        }
        return {
            ...user._doc,
            id: user._id.toString(),
        };
    },

    loginUser: async function({loginInput}){
        if(!loginInput.phoneNumber && !loginInput.password){
            throw new Error('Missing parameter');
        }
        const user =  await User.findOne({phoneNumber: loginInput.phoneNumber })
        const response = await bcrypt.compareSync(loginInput.password,user.password);
        console.log(user, "----------")
        console.log(response)
        if (!user){
            throw new Error('User Not found!');
        }
        if (response === false){
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({_id: user._id ,phoneNumber: user.phoneNumber },JWT_SECRET,{
            expiresIn: "2h",
        })
        return {
            user: user,
            token: token
        };
    },
}

