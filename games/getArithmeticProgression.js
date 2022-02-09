const getArithmeticProgression = () => {
  const sequence = [];
  const difference = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  let member = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
  const sequenceLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const missingMember = Math.floor(Math.random() * (sequenceLength - 1 + 1));
  for (; sequence.length < sequenceLength; member += difference) {
    sequence.push(member);
  }
  const sequenceCopy = sequence.slice();
  sequenceCopy[missingMember] = '...';
  const result = [];
  result.push(sequence[missingMember], sequenceCopy.join(' '), 'What number is missing in the progression?');
  return result;
};
export default getArithmeticProgression;
