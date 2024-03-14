import app from './app.js';

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on http://localhost:3000/');
});
