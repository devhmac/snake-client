//requiring net package from node
const net = require('net');
//connect function from client.js
const { connect } = require('./client');

const { setupInput } = require('./input');




console.log('connecting....')
setupInput(connect());

