import { DataTypes, Sequelize, Model } from 'sequelize';
import { sequelize } from '../config/config.js';

const Player = sequelize.define(
  'player',
  {
    player_id: {
      type: DataTypes.STRING(25),
      primaryKey: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Player;
