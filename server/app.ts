import chalk from 'chalk';
import express from 'express';

const app = express();
const log = console.log;
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (_, res) => {
  res.send('Hello World');
});

app.listen(port, hostname, () => {
  log(
    chalk.yellowBright.bgBlack.bold(
      `Server running at http://${chalk.green(hostname)}:${chalk.red(port)}/`,
    ),
  );
});
