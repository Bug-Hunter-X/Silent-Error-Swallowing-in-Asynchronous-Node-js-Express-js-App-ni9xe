const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    //Without proper error handling, the error is silently swallowed
    console.error('Error:', error); //This will log to the console but won't send error response to client
  });
});

async function doSomethingAsync() {
  // Simulate an error
  throw new Error('Something went wrong!');
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});