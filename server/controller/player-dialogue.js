import Player from '../models/player.js';
import PlayerDialogue from '../models/player-dialogue.js';
import Dialogue from '../models/dialogue.js';
import Setting from '../models/settings.js';
import Progress from '../models/progress.js';
import { UnauthorizedError, NotFoundError } from '../helpers/expressError.js';

export const getAll = async (req, res, next) => {
  try {
    const games = await PlayerDialogue.findAll();
    res.send({ game_slots: games });
  } catch (err) {
    return next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const game = await PlayerDialogue.findByPk(req.params.id, {
      //   attributes: { exclude: ['password'] },
      include: {
        model: Progress,
        as: 'concluded_settings',
        attributes: ['setting_name'],
      },
      //   include: { model: Progress },
      //     include: { model: Company, attributes: ['name'] },
      //     },
    });
    if (!game) {
      throw new NotFoundError('Game Slot not found!');
    }
    return res.json({ game: game });
  } catch (err) {
    return next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const new_game = await PlayerDialogue.create(req.body);
    return res.json({
      game: new_game,
    });
  } catch (err) {
    res.json(err);
    return next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const saved_game = await PlayerDialogue.findByPk(req.params.id);
    await saved_game.update(req.body);
    return res.json({ saved_game: saved_game });
  } catch (err) {
    return next(err);
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    const deletedSaveSlot = await PlayerDialogue.findByPk(req.params.id);
    await deletedSaveSlot.destroy();
    // res.clearCookie('token');
    return res.json({ msg: 'GameDeleted' });
  } catch (err) {
    return next(err);
  }
};
