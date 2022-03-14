
//Rock, paper ans scissors project

// User chooses from rock, paper and scissors
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb') {
  return userInput;}
  else {
    console.log('Error!')
    }
};

// console.log(getUserChoice('potato'));
// console.log(getUserChoice('scissors'));
// console.log(getUserChoice('rock'));

// Computer chooses from rock, paper and scissors
const getComputerChoice = () => {
let randomNumber = Math.floor(Math.random()*3);  
  switch (randomNumber) {
  case 0: return 'rock';
  case 1: return 'paper';
  case 2: return 'paper';
  }
};

//console.log(getComputerChoice ());
//console.log(getComputerChoice ());
//console.log(getComputerChoice ());

//Determining the possible scenarios and their message
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
      return "It\'s a draw";
  }

  if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
      return "The computer won!";
    } else {
      return "You won!";
    } 
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === 'bomb') {
    return "Cheater! You won!"
  }
};

// console.log(determineWinner('rock', 'scissor'));
// console.log(determineWinner('scissors', 'rock'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('scissors', 'paper'));
// console.log(determineWinner('rock', 'paper'));
// console.log(determineWinner('paper', 'rock'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('scissors', 'scissors'));
// console.log(determineWinner('rock', 'rock'));


// function playGame (userChoice===getUserChoice(), computerChoice===getComputerChoice()) {
//   console.log();
// };function playGame (getUserChoice, getComputerChoice) =>{

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log(`You choosed: ${userChoice}`);
  console.log(`The computer choosed: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();