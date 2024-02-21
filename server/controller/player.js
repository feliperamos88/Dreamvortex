import Player from '../models/player.js';
import PlayerDialogue from '../models/player-dialogue.js';
import Dialogue from '../models/dialogue.js';
import Progress from '../models/progress.js';
import { UnauthorizedError, NotFoundError } from '../helpers/expressError.js';

export const getAll = async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.send({ players: players });
  } catch (err) {
    return next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const player = await Player.findByPk(req.params.id, {
      include: {
        model: PlayerDialogue,
        as: 'saved_game',
        include: {
          model: Progress,
          as: 'concluded_settings',
          attributes: ['setting_name'],
        },
      },
    });
    if (!player) {
      throw new NotFoundError('Player_ID not found!');
    }
    return res.json({ player });
  } catch (err) {
    return next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const new_player = await Player.create(req.body, {});
    const player = await Player.findByPk(new_player.player_id, {
      include: {
        model: PlayerDialogue,
        as: 'saved_game',
        include: {
          model: Progress,
          as: 'concluded_settings',
          attributes: ['setting_name'],
        },
      },
    });
    return res.json({
      player: player,
    });
  } catch (err) {
    const error = new UnauthorizedError('This Player_ID already exists!');
    return next(error);
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    const deletedSaveSlot = await Player.findByPk(req.params.id);
    await deletedSaveSlot.destroy();
    return res.json({ msg: 'Player Deleted' });
  } catch (err) {
    return next(err);
  }
};

// export const update = async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     await user.update(req.body);
//     return res.json({ User: user });
//   } catch (err) {
//     return next(err);
//   }
// };
