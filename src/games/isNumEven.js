import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getIsEvenGame = () => {
  const randomNum = randomise(1, 100);
  const question = String(randomNum);
  const answer = isEven(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const playIsNumEven = () => start(gameRule, getIsEvenGame);
export default playIsNumEven;
