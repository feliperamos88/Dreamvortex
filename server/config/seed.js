import { sequelize } from './config.js';
import * as fs from 'fs';
import Player from '../models/player.js';
import PlayerDialogue from '../models/player-dialogue.js';
import Setting from '../models/settings.js';
import Progress from '../models/progress.js';
import Choice from '../models/choice.js';
import Dialogue from '../models/dialogue.js';

await sequelize.sync({ force: true });

const sql_string = fs.readFileSync('./database/db_seed.sql', 'utf8');

sequelize.query(sql_string);
