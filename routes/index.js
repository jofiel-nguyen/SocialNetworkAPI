const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');

// Prefix all routes defined in userRoutes with '/users'
router.use('/users', userRoutes);

// Prefix all routes defined in thoughtRoutes with '/thoughts'
router.use('/thoughts', thoughtRoutes);

// Prefix all routes defined in reactionRoutes with '/thoughts/:thoughtId/reactions'
router.use('/thoughts/:thoughtId/reactions', reactionRoutes);

module.exports = router;
