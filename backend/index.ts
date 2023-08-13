import express from 'express';
import cors from 'cors';
const app = express();
const port = 8080;

const sample_api = require('./src/router/sample_api');

app.use(cors());

app.use('/sample_api', sample_api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
