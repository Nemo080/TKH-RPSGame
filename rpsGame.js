//rock paper scissors

 

//global variables
let computerScore = 0;
let userScore = 0;
let round = 0;
 

// function getUserChoice

// use prompt to ask user to enter their choice for rock paper or scissors

// return users choice

function getUserChoice (){
  // alert("Let's play Rock, Paper, Scissors!");
  let userChoice = prompt("Rock, Paper, Scissors! Choose an option: Rock, Paper, Scissors");
  return userChoice;
}


//function getComputerChoice

//uses Math.random to pick rock, paper or scissors at random from an array 

//returns computer's choice

function getComputerChoice(){
  let rpsArray = ["rock", "paper", "scissors"]
  // got some help from this website to get the computer to pick from array: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/#
  let comChoice = rpsArray[(Math.floor(Math.random() * rpsArray.length))];
  alert("The computer picks: " + comChoice)
  return comChoice;
}


//function compareChoice

//takes in userChoice and computerChoice as arguments

//use nested if else to test user vs computer

//output alert messages for each outcome - ex: "user chose paper. computer chose rock. paper covers rock! player wins"

//increments the winners score

function compareChoice (getUserChoice, getComputerChoice){
  console.log(getUserChoice, getComputerChoice)
  if (getUserChoice === getComputerChoice){
    alert("It's a tie!");
  }
  else if (getUserChoice === "rock" && getComputerChoice === "paper"){
    computerScore++;
    alert("Point for the computer! You chose rock and computer chose paper.")
  }
  else if(getUserChoice === "rock" && getComputerChoice === "scissors") {
    userScore++;
    alert("Point for the User! You chose rock and computer chose scissors.")
  }
  else if (getUserChoice === "paper" && getComputerChoice === "rock"){
    userScore++;
    alert("Point for the User! You chose paper and computer chose rock.")
  }
  else if(getUserChoice === "paper" && getComputerChoice === "scissors"){
    computerScore++;
    alert("Point for the computer! You chose paper and computer chose scissors.")
  }
  else if (getUserChoice === "scissors" && getComputerChoice === "rock"){
    computerScore++;
    alert("Point for the computer! You chose scissors and computer chose rock.")
  }
  else if (getUserChoice === "scissors" && getComputerChoice === "paper"){
    userScore++;
    alert("Point for the User! You chose scissors and computer chose paper.")
  }
  else{
    alert("You did not make your choice of Rock, Paper, and Scissors. Please try again.")
  }
}

//function playGame

//counts round number

//run a while loop as long as computer and user's score are < 2(best 2/3)

//inside the while loop:

  //increment round counter

  //give an alert with the round # and user and computer's current scores

  //run compare choice, passing it user's choice and computer's choice.


function playGame () {
  alert("Let's play Rock, Paper, Scissors!");
  // used ChatGPT to understand how to code a round counter and the while loop
  while(round < 3 && userScore < 2 && computerScore < 2) {
    round++;
    alert("This is round #" + round);
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    compareChoice(userChoice, computerChoice);
  }

  if (userScore > computerScore) {
    alert("User wins!")
  }
  else if (userScore < computerScore) {
    alert("Computer wins!")
  }
  else {
    alert("It's a tie!")
  }
}
playGame()