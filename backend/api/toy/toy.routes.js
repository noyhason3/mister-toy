const express = require('express');
const {
  requireAuth,
  requireAdmin,
} = require('../../middlewares/requireAuth.middleware');
const {getToys, getToy, addToy, updateToy, deleteToy, saveReview} = require('./toy.controller')
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getToys);
router.get('/:toyId', getToy);
router.post('/', requireAuth, requireAdmin, addToy);
router.post('/:toyId/review',requireAuth, saveReview);
// router.put('/:toyId', updateToy);
router.put('/:toyId', requireAuth, requireAdmin, updateToy);

// router.delete('/:toyId' , deleteToy);
router.delete('/:toyId', requireAuth, requireAdmin, deleteToy);

module.exports = router;
