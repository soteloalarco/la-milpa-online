import chalk from 'chalk';
import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const log = console.log;
const hostname = '127.0.0.1';
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use('/static', express.static(path.join(__dirname, '../public')));

io.on('connect', () => {
  console.log('a user conected');
});

server.listen(port, hostname, () => {
  log(
    chalk.yellowBright.bgBlack.bold(
      `Server running at http://${chalk.green(hostname)}:${chalk.red(port)}/`,
    ),
  );
});
