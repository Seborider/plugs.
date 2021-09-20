import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { addGear } from './app/utils/addGear';
import type { Gear } from './types';
import { connectDatabase } from './app/utils/database';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/gear', async (req, res) => {
  const gear: Gear = req.body;
  await addGear(gear);
  return res.status(200).send(gear);
});

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));
app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

if (!process.env.MONGODB_URL) {
  throw new Error('No mongo database available!');
}

connectDatabase(process.env.MONGODB_URL).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
});
