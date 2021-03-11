const express = require('express');
const {
  requireAuth,
  requireAdmin,
} = require('../../middlewares/requireAuth.middleware');
const {getToys, getToy, addToy, updateToy, deleteToy} = require('./toy.controller')
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getToys);
router.get('/:toyId', getToy);
router.post('/', requireAuth, requireAdmin, addToy);
router.put('/:youId', requireAuth, requireAdmin, updateToy);

// router.put('/:youId',  requireAuth, updateUser)
router.delete('/:toyId', requireAuth, requireAdmin, deleteToy);

module.exports = router;
