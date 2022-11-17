const IP = 'localhost';
const PORT = 50541;
const MOVE_UP = "Move: up";
const MOVE_LEFT = "Move: left";
const MOVE_DOWN = "Move: down";
const MOVE_RIGHT = "Move: right";

const MESSAGES = {
  'f': 'Say: Oops, wrong button',
  'F': 'Say: Oops, wrong button',
  'q': 'Say: Seriously?',
  'Q': 'Say: Seriously?',
  'e': 'Say: Why you keep pushing wrong buttons?',
  'E': 'Say: Why you keep pushing wrong buttons?',
  'x': 'Say: Do you need glasses?',
  'X': 'Say: Do you need glasses?',
}

module.exports = {
  IP,
  PORT,
  MOVE_UP,
  MOVE_LEFT,
  MOVE_DOWN,
  MOVE_RIGHT,
  MESSAGES
};