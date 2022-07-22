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

// set up POST at GET all at /api/thought
router
    .route('/')
    .post(createThought)
    .get(getAllThoughts);

// set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// set up POST at /api/thoughtId/reactions
router
    .route('/:thoughtId/reactions/')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;