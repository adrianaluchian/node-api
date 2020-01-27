const cors = require('cors');
const express = require('express');
const graceful = require('node-graceful');

const port = 80;
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

graceful.on('exit', () => {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
});
