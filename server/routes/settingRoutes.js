import express from 'express';
// import * as  from '../controller/user.js';
// import {
//   authenticateJWT,
//   ensureLoggedIn,
// } from '../middleware/authentication.js';
import * as Setting from '../controller/setting.js';

const router = express.Router();

router.get('/', Setting.getAll);

router.get('/:name', Setting.getOne);

// router.patch('/:id', authenticateJWT, ensureLoggedIn, User.update);

// router.delete('/:id', authenticateJWT, ensureLoggedIn, User.deleteOne);

export default router;
