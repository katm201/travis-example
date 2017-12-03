import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '../')));
const indexPath = path.join(__dirname, '../index.html');

app.get('/', (request, response) => {
  response.send(indexPath);
});

export default app;
