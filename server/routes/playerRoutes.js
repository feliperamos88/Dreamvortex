import express from 'express';
import * as Player from '../controller/player.js';

const router = express.Router();

router.get('/', Player.getAll);

router.get('/:id', Player.getOne);

router.post('/', Player.create);

router.delete('/:id', Player.deleteOne);

export default router;
