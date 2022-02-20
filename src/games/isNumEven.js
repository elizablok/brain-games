import randomise from '../randomise.js';
import play from '../engine.js';

const isNumEven = () => {
  const randomNum = randomise(1, 100);
  const result = [];
  if (randomNum % 2 === 0) {
    result.push('yes', randomNum);
  } else {
    result.push('no', randomNum);
  }
  result.push();
  return result;
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const startIsNumEven = () => play(gameRule, isNumEven);
export default startIsNumEven;
