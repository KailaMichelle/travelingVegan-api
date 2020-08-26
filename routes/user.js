const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// ROUTES
router.get('/', ctrl.user.index);
router.get('/:id', ctrl.user.show);
router.put('/:id/favorite', ctrl.user.updateFavorite);
router.delete('/:id/removefavorite', ctrl.user.removeFavorite);

module.exports = router;