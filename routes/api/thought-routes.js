const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
    } = require('../../controllers/thought-controller');

// set up GET all at /api/thought
router
    .route('/')
    .get(getAllThoughts);

// set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// set up POST at /api/thought/:userId
router
    .route('/:userId')
    .post(createThought);

// set up POST at /api/thoughtId/reactions
router
    .route('./:thoughtId/reactions')
    .post(addReaction);

// set up DELETE at /api/thoughtId/reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = router;