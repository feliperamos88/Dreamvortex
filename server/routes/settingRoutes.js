import express from 'express';

import * as Setting from '../controller/setting.js';

const router = express.Router();

router.get('/', Setting.getAll);

router.get('/:name', Setting.getOne);

export default router;
