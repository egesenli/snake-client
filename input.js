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
  //special characters for canned messages
  if (key === 'f' || key === 'F') {
    connection.write('Say: Oops, wrong button!');
  }
  if (key === 'q' || key === 'Q') {
    connection.write('Say: Seriously?');
  }
  if (key === 'e' || key === 'E') {
    connection.write('Say: Why you keep pushing wrong buttons?');
  }
  if (key === 'x' || key === 'X') {
    connection.write('Say: Do you need glasses?');
  }
};


module.exports = { setupInput };
