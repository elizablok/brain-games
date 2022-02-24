import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getIsEvenGame = () => {
  const randomNum = randomise(1, 100);
  const result = [];
  const question = String(randomNum);
  const answer = isEven(randomNum) ? 'yes' : 'no';
  result.push(question, answer);
  return result;
};

const playIsNumEven = () => start(gameRule, getIsEvenGame);
export default playIsNumEven;
