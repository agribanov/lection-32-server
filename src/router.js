const router = require('express').Router();

router.use('/students', require('./students'));
router.use('/courses', require('./courses'));
router.use('/teachers', require('./teachers'));

module.exports = router;