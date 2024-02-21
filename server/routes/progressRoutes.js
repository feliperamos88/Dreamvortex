import express from 'express';
import * as Progress from '../controller/progress.js';

const router = express.Router();

router.get('/', Progress.getAll);

router.get('/:id', Progress.getOne);

router.post('/', Progress.create);

export default router;
