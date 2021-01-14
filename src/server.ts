import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema/index';
import expressPlayGround from 'graphql-playground-middleware-express';

const PORT = 5200;
const app = express();

app.use(cors());
app.use(compression());

const server = new ApolloServer ({
  schema,
  introspection: true
});

server.applyMiddleware({app});

app.get('/', expressPlayGround({
  endpoint: '/graphql'
}));

createServer(app).listen(
  { port: PORT },
  () => console.log(`Servidor Academia Online listo http://localhost:${PORT}/graphql`)
);
