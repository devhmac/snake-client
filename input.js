
let connection;

// function to handle user inputs
const handleUserInput = process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
})


//setting up stdin to handle user input
const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on stdin callback function handleUserInput is passed in to handle the data in from user

  handleUserInput


  return stdin;
}

module.exports = {
  setupInput
};