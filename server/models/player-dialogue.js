import { DataTypes, Sequelize, Model } from 'sequelize';
import { sequelize } from '../config/config.js';
import Player from './player.js';
import Dialogue from './dialogue.js';

const PlayerDialogue = sequelize.define('player-dialogue', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  act: {
    type: DataTypes.INTEGER,
  },
  setting: {
    type: DataTypes.TEXT,
  },
});

Player.hasMany(PlayerDialogue, {
  as: 'saved_game',
  foreignKey: { name: 'player_id' },
});
PlayerDialogue.belongsTo(Player, {
  as: 'player',
  foreignKey: { name: 'player_id' },
});

// Dialogue.hasMany(PlayerDialogue, {
//   as: 'saved_game',
//   foreignKey: { name: 'dialogue_id', allowNull: false, primaryKey: false },
// });
// PlayerDialogue.belongsTo(Dialogue, {
//   as: 'dialogue',
//   foreignKey: { name: 'dialogue_id', allowNull: false, primaryKey: false },
// });

Player.belongsToMany(
  Dialogue,
  {
    through: { model: PlayerDialogue, unique: false },
    foreignKey: 'player_id',
  }
  // as: 'dialogue',
);
Dialogue.belongsToMany(
  Player,
  {
    through: { model: PlayerDialogue, unique: false },
    foreignKey: 'dialogue_id',
  }
  // through: PlayerDialogue,
  // unique: false,
  // as: 'player',
);

// Player.belongsToMany(Dialogue, {
//   as: 'saved_game',
//   through: PlayerDialogue,
//   foreignKey: 'player_id',
//   otherKey: 'dialogue_id',
// });
// Dialogue.belongsToMany(Player, {
//   as: 'player',
//   through: PlayerDialogue,
//   foreignKey: 'dialogue_id',
//   otherKey: 'player_id',
// });

export default PlayerDialogue;
