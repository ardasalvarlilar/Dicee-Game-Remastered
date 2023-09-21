'use strict';

// selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
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

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  /*
    DONE: generate a random dice number between 1 and 6
    DONE: display dice
    DONE: Check for rolled 1: it true, switch to next player

  */
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1
    diceEl.classList.remove('hidden')
    diceEl.setAttribute('src', `dice-${dice}.png`)

    if(dice !== 1){
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore // tricy one
    
    }else{
      // Switch player
      switchPlayer() 
    }
  }
})

btnHold.addEventListener('click', () => {
  /*
    DONE: add current score to active players score
    DONE: Check if players score is >= 100 and finish the game
    DONE switch to the next plavyer
  */

  if(playing){
    scores[activePlayer] += currentScore // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  
    if(scores[activePlayer] >= 20){
      playing = false
      diceEl.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }else{
      switchPlayer()
    }
  }
})