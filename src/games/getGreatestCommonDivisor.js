import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2) => (num2 === 0) ? num1 : findGreatestCommonDivisor(num2, num1 % num2);

const getGreatestCommonDivisorGame = () => {
  const firstNum = randomise(1, 100);
  const secondNum = randomise(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGreatestCommonDivisor(firstNum, secondNum));
  return [question, answer];
};

const playGetGreatestCommonDivisorGame = () => start(gameRule, getGreatestCommonDivisorGame);
export default playGetGreatestCommonDivisorGame;
