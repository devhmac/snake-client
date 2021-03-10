//requiring net package from node
const net = require('net');
//connect function from client.js
const connect = require('./client');

// function to handle user inputs
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
}


//setting up stdin to handle user input
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on stdin callback function handleUserInput is passed in to handle the data in from user
  stdin.on('data', handleUserInput);

  return stdin;
}





console.log('connecting....')
connect();
setupInput();
