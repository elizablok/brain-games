import randomise from '../randomise.js';
import play from '../engine.js';

const getSumDifferenceProduct = () => {
  const mathOperation = ['+', '-', '*'];
  const firstNum = randomise(1, 100);
  const secondNum = randomise(1, 100);
  const randomIndex = randomise(1, 2);
  const randomMath = mathOperation[randomIndex];
  const result = [];
  switch (randomMath) {
    case '+':
      result.push(firstNum + secondNum);
      break;
    case '-':
      result.push(firstNum - secondNum);
      break;
    case '*':
      result.push(firstNum * secondNum);
      break;
    default:
      break;
  }
  result.push(`${firstNum} ${randomMath} ${secondNum}`);
  return result;
};

const gameRule = 'What is the result of the expression?';
const startGetSumDifferenceProduct = () => play(gameRule, getSumDifferenceProduct);
export default startGetSumDifferenceProduct;
