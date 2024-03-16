import { sequelize } from './config/config.js';
import * as fs from 'fs';
import Player from './models/player.js';
import PlayerDialogue from './models/player-dialogue.js';
import Setting from './models/settings.js';
import Progress from './models/progress.js';
import Choice from './models/choice.js';
import Dialogue from './models/dialogue.js';

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize.sync({ force: true });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const sql_string = fs.readFileSync('./database/db_seed.sql', 'utf8');

try {
  await sequelize.query(sql_string);
  console.log('DB seeding concluded.');
} catch (err) {
  console.log(err);
}
