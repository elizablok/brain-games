const getEvenNum = () => {
  const randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const result = [];
  if (randomNum % 2 === 0) {
    result.push('yes', randomNum);
  } else {
    result.push('no', randomNum);
  }
  result.push('Answer "yes" if the number is even, otherwise answer "no".');
  return result;
};
export default getEvenNum;
