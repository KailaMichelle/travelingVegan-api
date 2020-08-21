const router = require('express').Router();
const ctrl = require('../controllers');
// const authRequired = require('../middleware/authRequired');

// ROUTES
router.get('/', ctrl.user.index);
// router.get('/:id', ctrl.user.show);
// router.put('/:id', authRequired, ctrl.user.update);
// router.delete('/:id', authRequired, ctrl.user.destroy);

module.exports = router;