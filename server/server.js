import app from './app.js';
import { sequelize } from './config/config.js';
import PlayerDialogue from './models/player-dialogue.js';
import Player from './models/player.js';
import Progress from './models/progress.js';
// import Setting from './models/settings.js';
// import Choice from './models/choice.js';
// import Dialogue from './models/dialogue.js';

// const createPlayer = async () => {
//   const player = await Player.create({ player_id: 'felipeSlayer' });
//   const savedGame = await PlayerDialogue.create({
//     player_id: 'felipeSlayer',
//     dialogue_id: 'D3AA',
//   });
//   console.log(savedGame);
// };

// const createPl = async () => {
//   const progress = await Progress.create({
//     setting_name: 'desert',
//     saved_game_id: 2,
//   });

//   console.log(progress);
// };

// await sequelize.sync({ force: true });

app.listen(3001, () => {
  console.log('Up an running!');
});

// createPlayer();
// createPl();
