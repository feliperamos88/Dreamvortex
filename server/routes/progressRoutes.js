import express from 'express';
import * as Progress from '../controller/progress.js';
import {
  authenticateJWT,
  ensureLoggedIn,
} from '../middleware/authentication.js';

const router = express.Router();

router.get('/', Progress.getAll);

router.get('/:id', Progress.getOne);

router.post('/', Progress.create);

// router.patch('/:id', authenticateJWT, ensureLoggedIn, User.update);

// router.delete('/:id', authenticateJWT, ensureLoggedIn, User.deleteOne);

export default router;
