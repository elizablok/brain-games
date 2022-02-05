import readlineSync from 'readline-sync';

const game = (func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const question = func()[2];
  console.log(question);
  const numOfQuestions = 3;
  let index = 0;
  for (; index < numOfQuestions; index += 1) {
    const getRandom = func();
    console.log(`Question: ${getRandom[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(getRandom[0])) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getRandom[0]}'. Let's try again, ${name}!`);
      break;
    }
  }
  if (index === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
