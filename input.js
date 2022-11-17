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
    connection.write("Move: up");
  }
  if (key === 'a' || key === 'A' ) {
    connection.write("Move: left");
  }
  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  }
  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };
