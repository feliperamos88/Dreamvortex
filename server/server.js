import app from './app.js';
import { sequelize } from './config/config.js';

app.listen(process.env.PORT || 3001, () => {
  // console.log('Up an running!');
});
