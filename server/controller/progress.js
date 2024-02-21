import Player from '../models/player.js';
import PlayerDialogue from '../models/player-dialogue.js';
import Dialogue from '../models/dialogue.js';
import Progress from '../models/progress.js';
import { UnauthorizedError, NotFoundError } from '../helpers/expressError.js';
import { error } from 'console';

export const getAll = async (req, res, next) => {
  try {
    const progress = await Progress.findAll();
    res.send({ progress: progress });
  } catch (err) {
    return next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const progress = await Progress.findByPk(req.params.id, {
      include: {
        model: PlayerDialogue,
      },
    });
    if (progress) {
      throw new NotFoundError('Player_ID not found!');
    }
    return res.json({ player: player });
  } catch (err) {
    return next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const new_progress = await Progress.create(req.body);
    return res.json({
      new_progress: new_progress,
    });
  } catch (err) {
    return next(err);
  }
};
