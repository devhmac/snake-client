
let connection;

// function to handle user inputs
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  //movement
  if (key === 'w') connection.write('Move: up'); //connection.write is = to conn.write() in client.js
  if (key === 'a') connection.write('Move: left');
  if (key === 's') connection.write('Move: down');
  if (key === 'd') connection.write('Move: right');
  // chat buttons
  if (key === '1') connection.write('Say: Imma eat you')
  if (key === '2') connection.write('Say: Im so loooong')
  if (key === '3') connection.write('Say: yo soy numero uno')
}


//setting up stdin 'event handler' to handle user input
const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on stdin callback function handleUserInput is passed in to handle the data in from user
  //this is an event handler
  process.stdin.on('data', handleUserInput)
  //handleUserInput


  return stdin;
}

module.exports = {
  setupInput
};