import readlineSync from 'readline-sync';

const numOfQuestions = 3;

const start = (gameRule, play) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let index = 0; index < numOfQuestions; index += 1) {
    const [question, answer] = play();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const loose = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}!`;
    if (userAnswer !== answer) {
      return console.log(loose);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
export default start;
