const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thought` to routes created in `thought-routes.js`
router.use('/thought', thoughtRoutes);
// add prefix of `/user` to routes created in `user-routes.js`
router.use('/user', userRoutes);

module.exports = router;