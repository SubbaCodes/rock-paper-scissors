const getUserChoice = userInput => {
  userInput = prompt("enter your input");
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else
    return 'Wrong input!! Your inputs should be either "rock" OR "paper" OR "scissors"';
};

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) return "rock";
  else if (randomNum === 1) return "paper";
  else if (randomNum === 2) return "scissors";
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "rock" && computerChoice === "rock") {
    console.log(userChoice, computerChoice);
    return "It's a tie. Try again!!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    console.log(userChoice, computerChoice);
    return "Ohh you lost!!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log(userChoice, computerChoice);
    return "Hey you won!!";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    console.log(userChoice, computerChoice);
    return "It's a tie. Try again!!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log(userChoice, computerChoice);
    return "Hey you won!!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log(userChoice, computerChoice);
    return "Ohh you lost!!";
  } else if (userChoice === "scissors" && computerChoice === "scissors") {
    console.log(userChoice, computerChoice);
    return "It's a tie. Try again!!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log(userChoice, computerChoice);
    return "Ohh you lost!!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log(userChoice, computerChoice);
    return "Hey you won!!";
  } else return "Ooops something is not right. You have a wrong input!!";
};

console.log(determineWinner(getUserChoice("paper"), getComputerChoice()));

// console.log(getComputerChoice());

// console.log(getUserChoice("rocks"));
