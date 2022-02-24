import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2) => {
  let int1 = num1;
  let int2 = num2;
  while (int1 !== int2) {
    if (int1 > int2) {
      int1 -= int2;
    } else {
      int2 -= int1;
    }
  }
  return int1;
};

const getGreatestCommonDivisorGame = () => {
  const firstNum = randomise(1, 100);
  const secondNum = randomise(1, 100);
  const result = [];
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGreatestCommonDivisor(firstNum, secondNum));
  result.push(question, answer);
  return result;
};

const playGetGreatestCommonDivisorGame = () => start(gameRule, getGreatestCommonDivisorGame);
export default playGetGreatestCommonDivisorGame;
