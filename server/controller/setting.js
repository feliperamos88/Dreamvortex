import Setting from '../models/settings.js';
import Dialogue from '../models/dialogue.js';
import Choice from '../models/choice.js';
import { Op } from 'sequelize';

export const getAll = async (req, res, next) => {
  try {
    const allSettings = await Setting.findAll({
      where: {
        [Op.not]: { name: ['prologue', 'final'] },
      },
    });
    res.send({ settings: allSettings });
  } catch (err) {
    return next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const setting = await Setting.findByPk(req.params.name, {
      include: {
        model: Dialogue,
        include: { model: Choice },
      },
    });
    return res.json({ setting: setting });
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

// export const deleteOne = async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     await user.destroy();
//     res.clearCookie('token');
//     return res.json({ msg: 'User deleted' });
//   } catch (err) {
//     return next(err);
//   }
// };
