import express from 'express';
import * as Player from '../controller/player.js';
import {
  authenticateJWT,
  ensureLoggedIn,
} from '../middleware/authentication.js';

const router = express.Router();

router.get('/', Player.getAll);

router.get('/:id', Player.getOne);

router.post('/', Player.create);

// router.patch('/:id', authenticateJWT, ensureLoggedIn, User.update);

// router.delete('/:id', authenticateJWT, ensureLoggedIn, User.deleteOne);

export default router;
