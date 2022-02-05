const isNumEven = () => {
  const randomised = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const randomNum = [];
  if (randomised % 2 === 0) {
    randomNum.push(randomised, 'yes');
  } else {
    randomNum.push(randomised, 'no');
  }
  randomNum.push('Answer "yes" if the number is even, otherwise answer "no".');
  return randomNum;
};
export default isNumEven;
