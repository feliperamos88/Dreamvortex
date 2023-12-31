import { DataTypes, Sequelize, Model } from 'sequelize';
import { sequelize } from '../config/config.js';
import Setting from './settings.js';
import Choice from './choice.js';

const Dialogue = sequelize.define(
  'dialogue',
  {
    id: {
      type: DataTypes.TEXT,
      autoIncrement: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    opening_text: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    ending_text: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    transition_to_setting: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Dialogue.belongsTo(Setting, { foreignKey: 'current_setting_name' });
Dialogue.belongsTo(Setting, { foreignKey: 'transition_to_setting' });
Setting.hasMany(Dialogue, { foreignKey: 'current_setting_name' });
Dialogue.hasMany(Choice, {
  foreignKey: 'dialogue_id_from',
});

Choice.belongsTo(Dialogue, {
  foreignKey: 'dialogue_id_from',
  onDelete: 'CASCADE',
});
Choice.belongsTo(Dialogue, {
  foreignKey: 'dialogue_id_to',
  onDelete: 'CASCADE',
});

export default Dialogue;
