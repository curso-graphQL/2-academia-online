import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const PORT = 5200;
const app = express();

app.use(cors());
app.use(compression());
app.get('/', (req, res) => res.send('Hola a la academia online en GraphQL'));

createServer(app).listen(
  { port: PORT },
  () => console.log(`Servidor Academia Online listo http://localhost:${PORT}`)
);
