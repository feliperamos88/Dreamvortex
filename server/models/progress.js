import { DataTypes, Sequelize, Model } from 'sequelize';
import { sequelize } from '../config/config.js';

import PlayerDialogue from './player-dialogue.js';
import Setting from './settings.js';
import Player from './player.js';

const Progress = sequelize.define('progress', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

Progress.belongsTo(PlayerDialogue, {
  as: 'concluded_settings',
  foreignKey: 'saved_game_id',
  onDelete: 'CASCADE',
});

PlayerDialogue.hasMany(Progress, {
  as: 'concluded_settings',
  foreignKey: 'saved_game_id',
  onDelete: 'CASCADE',
});
Setting.belongsToMany(PlayerDialogue, {
  through: Progress,
  foreignKey: 'setting_name',
});
PlayerDialogue.belongsToMany(Setting, {
  through: Progress,
  foreignKey: 'saved_game_id',
});

// PlayerDialogue.belongsToMany(Setting, {
//   through: Progress,
//   foreignKey: 'setting_id',
//   otherKey: 'slot_id',
// });
// Setting.belongsToMany(PlayerDialogue, {
//   through: Progress,
//   foreignKey: 'slot_id',
//   otherKey: 'setting_id',
// });

export default Progress;
