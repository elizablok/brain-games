const simpleCalculator = () => {
  const mathOperation = ['+', '-', '*'];
  const firstNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const secondNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const randomIndex = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
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
  result.push(`${firstNum} ${randomMath} ${secondNum}`, 'What is the result of the expression?');
  return result;
};
export default simpleCalculator;
