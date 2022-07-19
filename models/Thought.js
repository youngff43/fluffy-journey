const { Schema, model } = require('mongoose');
const moment = require('moment');

// reaction schema 
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        unique: true,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: "Body is required",
        maxLength: 280,
    },

    username: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMMM Do, YYYY [at] h:mm:ss a')
    }
  },
  {
    toJSON: {
        getters: true
    }
  });

// thought schema 
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMMM Do, YYYY [at] h:mm:ss a')
      },

    username: [{
        
            type: Schema.Types.ObjectId,
            ref: 'User'
        
    }],

    reactions: [ReactionSchema]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    
    id: false
  })

// get total count of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thoughts model
module.exports = Thought;