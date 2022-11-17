const { connect } = require('./client');
const { setupInput } = require('./input.js');

console.log("Connecting ...");

const connection = connect();
setupInput(connection);