import { DataTypes, Sequelize, Model } from 'sequelize';
import { sequelize, BCRYPT_WORK_FACTOR } from '../config/config.js';
import Dialogue from './dialogue.js';

const Choice = sequelize.define(
  'choice',
  {
    id: {
      type: DataTypes.TEXT,
      autoIncrement: false,
      primaryKey: true,
    },
    choice_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    final_choice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Choice.belongsTo(Dialogue, {
//   foreignKey: 'dialogue_id_from',
//   onDelete: 'CASCADE',
// });
// Choice.belongsTo(Dialogue, {
//   foreignKey: 'dialogue_id_to',
//   onDelete: 'CASCADE',
// });

export default Choice;
