'use strict';

// selecting elements
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')

const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let currentScore = 0

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  /*
    DONE: generate a random dice number between 1 and 6
    DONE: display dice
    TODO: Check for rolled 1: it true, switch to next player

  */

  const dice = Math.trunc(Math.random() * 6) + 1
  diceEl.classList.remove('hidden')
  diceEl.setAttribute('src', `dice-${dice}.png`)

  if(dice !== 1){
    currentScore += dice
    current0El.textContent = currentScore // change later

  }else{
    // Switch player
  }
})