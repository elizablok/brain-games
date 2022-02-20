import randomise from '../randomise.js';
import play from '../engine.js';

const getArithmeticProgression = () => {
  const sequence = [];
  const difference = randomise(1, 10);
  let member = randomise(1, 50);
  const sequenceLength = randomise(5, 10);
  const missingMemberIndex = randomise(0, sequenceLength) - 1;
  for (; sequence.length < sequenceLength; member += difference) {
    sequence.push(member);
  }
  const sequenceCopy = sequence.slice();
  sequenceCopy[missingMemberIndex] = '...';
  const result = [];
  result.push(sequence[missingMemberIndex], sequenceCopy.join(' '));
  return result;
};

const gameRule = 'What number is missing in the progression?';
const startGetArithmeticProgression = () => play(gameRule, getArithmeticProgression);
export default startGetArithmeticProgression;
