const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1
    },

    createdAt: {
        type: Date,
        default: Date.now
      },

    username: {
        type: String,
        required: true,
    },
    reactions: []
  });

  // create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thoughts model
module.exports = Thought;