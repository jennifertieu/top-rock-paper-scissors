"use strict"

// Add an event listener to the selection buttons
const rockButton = document.querySelector(".rock__button");
const paperButton = document.querySelector(".paper__button");
const scissorsButton = document.querySelector(".scissors__git button");

rockButton.addEventListener("click", e => console.log(e));
paperButton.addEventListener("click", e => console.log(e));
scissorsButton.addEventListener("click", e => console.log(e));

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

    if (playerWins > computerWins) {
        return "User Wins!"
    } else if (computerWins > playerWins) {
        return "Computer Wins! You Lose :(."
    } else {
        return "No one wins! Play again?"
    }
}
