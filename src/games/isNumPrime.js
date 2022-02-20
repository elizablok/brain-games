import randomise from '../randomise.js';
import play from '../engine.js';

const isNumPrime = () => {
  const isPrime = (num) => {
    for (let divisor = 2; divisor * divisor <= num; divisor += 1) {
      if (num % divisor === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const randomNum = randomise(2, 100);
  const result = [];
  result.push(isPrime(randomNum), randomNum);
  return result;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startIsNumPrime = () => play(gameRule, isNumPrime);
export default startIsNumPrime;
