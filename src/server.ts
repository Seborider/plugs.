import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { addGear, readGear, deleteGear, findGear } from './utils/gear';
import type { Gear } from './types';
import { connectDatabase } from './utils/database';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/gear', async (request, response) => {
  const gear: Gear = request.body;
  await addGear(gear);
  return response.status(200).send(gear);
});

app.get('/api/gear', async (_request, response) => {
  const gear = await readGear();
  response.json(gear);
});

app.get('/api/gear/search', async (request, response) => {
  const { query } = request.query;
  if (!query || typeof query !== 'string') {
    response.status(400).send();
    return;
  }
  const gear = await findGear(query);
  response.json(gear);
});

app.delete('/api/gear/:name', async (request, response) => {
  const { name } = request.params;
  await deleteGear(name);
  response.status(200).send('Deleted');
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
