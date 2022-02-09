const isNumPrime = () => {
  const isPrime = (num) => {
    for (let divisor = 2; divisor * divisor <= num; divisor += 1) {
      if (num % divisor === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const randomNum = Math.floor(Math.random() * (100 - 2 + 1)) + 2;
  const result = [];
  result.push(isPrime(randomNum), randomNum, 'Answer "yes" if given number is prime. Otherwise answer "no".');
  return result;
};
export default isNumPrime;
