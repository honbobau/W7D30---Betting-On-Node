'use strict';
const prompt = require('prompt-sync')();
const colors = require('colors');

let playerCurrentMoney = 100;
let playerCurrentNum;
let playerCurrentBet;
let gameCurrentNum;

// player picks number
function playerNum() {
  let num = prompt("Pick a number between 1 and 10: ");

  while (num < 1 || num > 10) {
    num = prompt("You entered: " + num + ". " + "Number must be in between 1 and 10: ");
  }

  return Number(num);
}

// player places bet
function playerBet() {
  let bet = prompt("Pick an amount to bet between $5 and $10: ");

  while (bet < 5 || bet > 10) {
    bet = prompt("You entered: $" + bet + ". " + "Bet between $5 and $10: ");
  }

  return Number(bet);
}

/* game functions */
// generates random number
function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}

// checks the player number
function checkNum(number) {
  // correct guess
  if (playerCurrentNum === gameCurrentNum) {
    playerCurrentMoney += playerCurrentBet
    console.log("Correct!".green + "Current Money: " + playerCurrentMoney);

  // guess +- 1
  } else if (playerCurrentNum === gameCurrentNum + 1 || playerCurrentNum === gameCurrentNum - 1) {
    console.log("Close!".yellow + "The number was: " + gameCurrentNum + " " + "Current Money: $" + playerCurrentMoney);

  // wrong guess
  } else {
    playerCurrentMoney -= playerCurrentBet
    console.log("Wrong!".red + "The number was: " + gameCurrentNum + " " + "Current Money: $" + playerCurrentMoney);
  }
}

// gameplay
console.log("Welcome to GambleFunTimeYeh. You have $100 remaining.")
while (playerCurrentMoney > 0) {
  gameCurrentNum = randomNum();
  playerCurrentNum = playerNum();
  playerCurrentBet = playerBet();

  checkNum(playerCurrentNum);
};