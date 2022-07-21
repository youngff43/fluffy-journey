const { Thought, User } = require('../models');

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({path: 'reactions', select: '-__v'})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
                });
    },

    // get one thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({path: 'reactions', select: '-__v'})
            .select('-__v')
            .then(dbThoughtData => {
            // If no thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                return;
                }
                res.json(dbThoughtData);
            })
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
    },

    // create thought 
    createThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
            .then((dbThoughtData) => {
                console.log(dbThoughtData);
                return User.findOneAndUpdate(
                    { _id: body.userId}, 
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserData);
                console.log(dbUserData);
                })
                .catch(err => res.json(err));
    },

    // update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .populate({path: 'reactions', select: '-__v'})
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                return;
                }
                res.json(dbThoughtData);
            })
        .catch(err => res.status(400).json(err));
    },

    // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                return;
                }
                res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
    },

    // add a new reaction
    addReaction({params, body}, res) {
        Thought.findOneAndUpdate({_id: params.thoughtId}, {$push: {reactions: body}}, {new: true, runValidators: true})
            .populate({path: 'reactions', select: '-__v'})
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({message: 'No thoughts with this particular ID!'});
                    return;
                }
            res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err))
        },
    
    // delete a reaction by ID
    deleteReaction({params}, res) {
            Thought.findOneAndUpdate({_id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new : true})
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({message: 'No thoughts with this particular ID!'});
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
        }
    
};

module.exports = thoughtController;