# Silent Error Swallowing in Asynchronous Node.js Express.js App

This repository demonstrates a common yet subtle bug in asynchronous Node.js applications using Express.js: unhandled promise rejections.  When an asynchronous operation throws an error, if it's not explicitly caught and handled, the error is silently swallowed, leading to unexpected behavior without any clear indication of the problem.

The `bug.js` file showcases this issue. The server appears to run normally, but errors thrown within asynchronous operations are not properly propagated or handled, making debugging a challenge.

The `bugSolution.js` file provides a corrected version with proper error handling, demonstrating how to prevent this issue.  It showcases best practices for handling asynchronous errors and providing informative responses to clients.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install express` to install the necessary dependency.
4. Execute `node bug.js` to run the application with the unhandled rejection.  Observe the server starts without any error messages, yet errors are logged to the console, but not sent to the client.
5. Execute `node bugSolution.js` to run the corrected application. Note how errors are now properly handled and a relevant HTTP status code is returned to the client. 
