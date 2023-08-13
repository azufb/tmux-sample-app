const express = require('express');
const app = express();
const port = 3000;

const sample_api = require('./src/router/sample_api');

app.use('/sample_api', sample_api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
