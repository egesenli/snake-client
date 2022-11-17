const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Connected to the snake server.");
    conn.write('Name: SNK');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};


//EXPORT
module.exports = { connect };