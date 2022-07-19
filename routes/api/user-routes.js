const router = require('express').Router();
const {
    getallUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// set up GET all and and POST at /api/user
router
    .route('/')
    .get(getallUsers)
    .post(createUser);

// set up GET one, PUT, and DELETE at /api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// set up POST and DELETE at /api/users/:userId/friends/:friendId
router
    .route('./:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
