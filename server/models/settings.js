import { DataTypes, Sequelize, Model } from 'sequelize';
import { sequelize } from '../config/config.js';

const Setting = sequelize.define(
  'setting',
  {
    name: {
      type: DataTypes.STRING(25),
      primaryKey: true,
    },
    background_pic: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    character: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Setting;
