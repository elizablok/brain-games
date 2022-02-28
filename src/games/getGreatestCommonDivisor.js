import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2) => {
  const int1 = num1;
  const int2 = num2;
  const res = (int2 === 0) ? int1 : findGreatestCommonDivisor(int2, int1 % int2);
  return res;
};

const getGreatestCommonDivisorGame = () => {
  const firstNum = randomise(1, 100);
  const secondNum = randomise(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGreatestCommonDivisor(firstNum, secondNum));
  return [question, answer];
};

const playGetGreatestCommonDivisorGame = () => start(gameRule, getGreatestCommonDivisorGame);
export default playGetGreatestCommonDivisorGame;
