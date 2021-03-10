//requiring net package from node
const net = require('net');
//connect function from client.js
const connect = require('./client');

//setting up stdin to handle user input
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on key press close program
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!")
      process.exit();
    }
  })

  return stdin;
}





console.log('connecting....')
connect();
setupInput();
