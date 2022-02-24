import randomise from '../randomise.js';
import start from '../engine.js';

const gameRule = 'What number is missing in the progression?';

const generateProgression = (member, difference, length) => {
  const sequence = [];
  for (let member1 = member; sequence.length < length; member1 += difference) {
    sequence.push(member1);
  }
  return sequence;
};

const getArithmeticProgressionGame = () => {
  const randomDifference = randomise(1, 10);
  const randomMember = randomise(1, 50);
  const randomLength = randomise(5, 10);
  const progression = generateProgression(randomMember, randomDifference, randomLength);
  const progressionCopy = progression.slice();
  const missingMemberIndex = randomise(0, randomLength - 1);
  progressionCopy[missingMemberIndex] = '..';
  const question = progressionCopy.join(' ');
  const answer = String(progression[missingMemberIndex]);
  const result = [];
  result.push(question, answer);
  return result;
};

const playGetArithmeticProgression = () => start(gameRule, getArithmeticProgressionGame);
export default playGetArithmeticProgression;
