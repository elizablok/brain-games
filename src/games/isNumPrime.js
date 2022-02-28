import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let divisor = 2, root = Math.sqrt(num); divisor <= root; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getIsPrimeGame = () => {
  const randomNum = randomise(2, 100);
  const question = String(randomNum);
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const playIsNumPrime = () => start(gameRule, getIsPrimeGame);
export default playIsNumPrime;
