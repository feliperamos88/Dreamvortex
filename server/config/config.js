import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

// export const sequelize = new Sequelize(process.env.DATABASE)

export const sequelize = new Sequelize('game-db', 'f.ramos', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  // define: {
  //   freezeTableName: true,
  // },
});

export const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';

export const BCRYPT_WORK_FACTOR = 12;
