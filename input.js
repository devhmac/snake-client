// function to handle user inputs
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (key === 'w') console.log('Move: up');
  if (key === 'a') console.log('Move: left');
  if (key === 's') console.log('Move: down');
  if (key === 'd') console.log('Move: right');
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

module.exports = {
  setupInput
};