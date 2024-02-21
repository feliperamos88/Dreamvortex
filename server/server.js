import app from './app.js';
import { sequelize } from './config/config.js';

await sequelize.sync();

app.listen(process.env.PORT || 3001, () => {});
