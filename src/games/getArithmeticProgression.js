import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'What number is missing in the progression?';

const generateProgression = (member, difference, length) => {
  const sequence = [];
  for (let current = member; sequence.length < length; current += difference) {
    sequence.push(current);
  }
  return sequence;
};

const hideProgressionMember = (numericalOrder, hiddenMemberIndex) => {
  const numericalOrderCopy = numericalOrder.slice();
  numericalOrderCopy[hiddenMemberIndex] = '..';
  return numericalOrderCopy.join(' ');
};

const getArithmeticProgressionGame = () => {
  const randomDifference = randomise(1, 10);
  const randomStartMember = randomise(1, 50);
  const randomLength = randomise(5, 10);
  const progression = generateProgression(randomStartMember, randomDifference, randomLength);
  const missingMemberIndex = randomise(0, randomLength - 1);
  const question = hideProgressionMember(progression, missingMemberIndex);
  const answer = String(progression[missingMemberIndex]);
  return [question, answer];
};

const playGetArithmeticProgression = () => start(gameRule, getArithmeticProgressionGame);
export default playGetArithmeticProgression;
