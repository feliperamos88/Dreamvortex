import app from './app.js';
import * as dotenv from 'dotenv';
dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on http://localhost:3000/');
});
