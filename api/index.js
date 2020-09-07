const router = require('express').Router();

const usersRoutes = require('./user-routes');

// Add `/users` to created routes
router.use('/users', usersRoutes);

// Export Module Router
module.exports = router;