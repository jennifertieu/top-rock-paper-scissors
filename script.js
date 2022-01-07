"use strict"

function computerPlay() {
    // generate random number between 0-2 inclusive
    let num = Math.floor(Math.random() * 3);
    return num === 0 ? "ROCK"
         : num === 1 ? "PAPER"
         : "SCISSORS";
}

function gameRound(playerSelection, computerSelection) {
    // return if the user won the round
    if (playerSelection === computerSelection) {
        console.log("It's a tie! Nobody wins.");
        return null
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose! Paper beats Rock.");
        return false
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS"){
        console.log("You Win! Rock beats Scissors.");
        return true
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win! Paper beats Rock.");
        return true
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper.");
        return false
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose! Rock beats Scissors.");
        return false
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win! Scissors beats Paper.");
        return false
    } else {
        console.log("Invalid Inputs.");
        return null
    }
}

function game() {
    let playerSelection, computerSelection, result;
    let playerWins = 0;
    let computerWins = 0;
    const selections = ["ROCK", "PAPER", "SCISSORS"];
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt()
        computerSelection = computerPlay();

        // Verify user's input
        while (!(selections.includes(playerSelection.toUpperCase()))) {
            playerSelection = prompt();
        }

        console.log(`User plays ${playerSelection}, Computer plays ${computerSelection}`);
        result = (gameRound(playerSelection, computerSelection));

        if (result) {
            playerWins += 1;
        } else if (result === false) {
            computerWins += 1;
        } 
        console.log(`Current Score - Player: ${playerWins}, Computer: ${computerWins}`);
    }

    if (playerWins > computerWins) {
        return "User Wins!"
    } else if (computerWins > playerWins) {
        return "Computer Wins! You Lose :(."
    } else {
        return "No one wins! Play again?"
    }
}

console.log(game());