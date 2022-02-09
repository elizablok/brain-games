const getGreatestCommonDivisor = () => {
  let firstNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  let secondNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const result = [];
  result.push(`${firstNum} ${secondNum}`, 'Find the greatest common divisor of given numbers.');

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
export default getGreatestCommonDivisor;
