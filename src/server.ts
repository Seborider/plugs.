import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {
  addGear,
  readGear,
  readSingleGear,
  deleteGear,
  findGear,
  editGear,
} from './utils/gear';
import type { Gear } from './types';
import { connectDatabase } from './utils/database';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/gear/search', async (request, response) => {
  const { query } = request.query;
  if (!query || typeof query !== 'string') {
    response.status(400).send('Invalid');
    return;
  }
  try {
    const gear = await findGear(query);
    response.status(200).json(gear);
  } catch (error) {
    console.error(error);
    response.status(400).send('Bad Request');
  }
});

app.get('/api/gear/:name', async (request, response) => {
  const { name } = request.params;
  if (!name) {
    response.status(404).send(`${name} not found`);
  }
  try {
    const gear = await readSingleGear(name);
    response.json(gear);
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error! Please try again later.');
  }
});

app.delete('/api/gear/:name', async (request, response) => {
  const { name } = request.params;
  if (!name) {
    response.status(400).send('Bad Request');
  }
  try {
    await deleteGear(name);
    response.status(200).send('Deleted');
  } catch (error) {
    console.error(error);
    response.status(401).send('Unauthorized request');
  }
});

app.patch('/api/gear/:name', async (request, response) => {
  const { name } = request.params;
  const gear: Gear = request.body;
  if (!name) {
    response.status(400).send('Bad Request');
  }
  try {
    await editGear(name, gear);
    response.status(200).json(gear);
  } catch (error) {
    console.error(error);
    response.status(404).send(`${name} not found`);
  }
});

app.post('/api/gear', async (request, response) => {
  const gear: Gear = request.body;
  await addGear(gear);
  return response.status(200).send(gear);
});

app.get('/api/gear', async (_request, response) => {
  const gear = await readGear();
  response.json(gear);
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
