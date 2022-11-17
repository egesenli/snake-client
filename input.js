const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES } = require('./constants');


let connection;

const setupInput = function(conn) {
  connection = conn;
const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
  if (key === 'w' || key === 'W') {
    connection.write(MOVE_UP);
  }
  if (key === 'a' || key === 'A' ) {
    connection.write(MOVE_LEFT);
  }
  if (key === 's' || key === 'S') {
    connection.write(MOVE_DOWN);
  }
  if (key === 'd' || key === 'D') {
    connection.write(MOVE_RIGHT);
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
}
module.exports = { setupInput };
