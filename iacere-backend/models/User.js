const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        require: true,
    }
},{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

userSchema.index({ updatedAt: -1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});
userSchema.methods.checkPassword = function (hash, done) {
    const { password } = this;

    bcrypt.compare(hash, password, (err, res) => {
        if (res) {
            return done(null, true);
        }
        return done('Wrong Password!');
    });
};
module.exports = mongoose.model('User', userSchema)


