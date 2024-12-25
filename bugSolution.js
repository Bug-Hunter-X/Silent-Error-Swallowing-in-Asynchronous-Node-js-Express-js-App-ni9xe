const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); //Send proper error response
    });
});

async function doSomethingAsync() {
  throw new Error('Something went wrong!');
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});