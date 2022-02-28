import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'What is the result of the expression?';

const solveExpression = (num1, num2, mathOperation) => {
  let res;
  if (mathOperation === '+') {
    res = num1 + num2;
  } else if (mathOperation === '-') {
    res = num1 - num2;
  } else {
    res = num1 * num2;
  }
  return res;
};

const getSumDifferenceProductGame = () => {
  const mathOperations = ['+', '-', '*'];
  const randomIndex = randomise(1, 2);
  const randomMathOperation = mathOperations[randomIndex];
  const firstNum = randomise(1, 100);
  const secondNum = randomise(1, 100);
  const question = `${firstNum} ${randomMathOperation} ${secondNum}`;
  const answer = String(solveExpression(firstNum, secondNum, randomMathOperation));
  return [question, answer];
};

const playGetSumDifferenceProduct = () => start(gameRule, getSumDifferenceProductGame);
export default playGetSumDifferenceProduct;
