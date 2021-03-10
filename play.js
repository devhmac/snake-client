//requiring net package from node
const net = require('net');

//
const connect = () => {
  // this is where we're connecting
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  //interpret incoming data as text(utf8)
  conn.setEncoding('utf8')

  return conn;
}

console.log('Connecting .....')
connect();

