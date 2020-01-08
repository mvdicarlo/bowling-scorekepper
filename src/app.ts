import * as readline from 'readline';
import Bowling from './games/bowling/bowling';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Expected Format: 00-00-00-00-00-00-00-00-00-00
rl.question('Please provide a bowling game ', (answer: string) => {
  const game: Bowling = new Bowling(answer);
  console.log(`The score of the game was: ${game.getScore()}`);
  rl.close();
});
