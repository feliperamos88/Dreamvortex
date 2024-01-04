import app from './app.js';
import { sequelize } from './config/config.js';
// import PlayerDialogue from './models/player-dialogue.js';
// import Player from './models/player.js';
// import Progress from './models/progress.js';
// import Setting from './models/settings.js';
// import Choice from './models/choice.js';
// import Dialogue from './models/dialogue.js';

// await sequelize.sync({ force: true });

// await sequelize.sync();

app.listen(3001, () => {
  console.log('Up an running!');
});

// createPlayer();
// createPl();
