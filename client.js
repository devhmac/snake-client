//requiring net package from node
const net = require('net');
const { IP, PORT } = require('./constants')

// boiler plate for client side connection
const connect = () => {
  // this is where we're connecting
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //interpret incoming data as text(utf8)
  conn.setEncoding('utf8')

  // this is the event handler for incoming data from server to client
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })

  conn.on('connect', () => {
    console.log("client has connected to the game server")
    conn.write("Name: Dev");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50)


  })

  return conn;
}
module.exports = { connect };

