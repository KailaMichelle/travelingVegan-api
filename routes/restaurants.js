const router = require('express').Router();
const ctrl = require('../controllers');
// const authRequired = require('../middleware/authRequired');

// ROUTES
router.get('/', ctrl.restaurants.index);
router.get('/:id', ctrl.restaurants.show);
router.post('/', ctrl.restaurants.create);
router.put('/:id', ctrl.restaurants.update);
router.delete('/:id', ctrl.restaurants.destroy);

module.exports = router;