import randomise from '../randomise.js';
import play from '../engine.js';

const getGreatestCommonDivisor = () => {
  let firstNum = randomise(1, 100);
  let secondNum = randomise(1, 100);
  const result = [];
  result.push(`${firstNum} ${secondNum}`);

  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  result.unshift(firstNum);
  return result;
};

const gameRule = 'Find the greatest common divisor of given numbers.';
const startGetGreatestCommonDivisor = () => play(gameRule, getGreatestCommonDivisor);
export default startGetGreatestCommonDivisor;
