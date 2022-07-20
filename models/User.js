const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required.',
        trim: true
    },

    email: {
        type: String,
        required: "Email is required",
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill in a valid email address"],
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
        }]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },

    id: false
});

// get the total count of friends 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the Users model
module.exports = User;