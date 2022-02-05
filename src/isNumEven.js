const isNumEven = () => {
  const randomised = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const randomNum = [];
  if (randomised % 2 === 0) {
    randomNum.push('yes', randomised);
  } else {
    randomNum.push('no', randomised);
  }
  randomNum.push('Answer "yes" if the number is even, otherwise answer "no".');
  return randomNum;
};
export default isNumEven;
