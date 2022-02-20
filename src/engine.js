import readlineSync from 'readline-sync';

const play = (gameRule, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  const numOfQuestions = 3;
  let index = 0;

  for (; index < numOfQuestions; index += 1) {
    const getRandomQuestion = game();
    console.log(`Question: ${getRandomQuestion[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(getRandomQuestion[0])) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getRandomQuestion[0]}'. Let's try again, ${name}!`);
      break;
    }
  }

  if (index === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default play;
