import express from 'express';

import * as GameSlot from '../controller/player-dialogue.js';

const router = express.Router();

router.get('/', GameSlot.getAll);

router.get('/:id', GameSlot.getOne);

router.post('/', GameSlot.create);

router.patch('/:id', GameSlot.update);

router.delete('/:id', GameSlot.deleteOne);

export default router;
