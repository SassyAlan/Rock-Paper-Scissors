
let playerScore=0;
let pcScore=0;

function computerPlay(){
    const play = Math.floor(Math.random()*3);
    let pcPlay='';
    switch (play) {
        case 0: 
        pcPlay='ROCK';
        break;

        case 1:
        pcPlay='PAPER';
        break;

        case 2:
        pcPlay="SCISSORS";
        break;
    }
    return pcPlay;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == null) return ('no input detected');
    let roundWinner = '';
    playerSelection = playerSelection.toUpperCase();
      if (playerSelection == computerSelection) {
        roundWinner = 'tie';
      }
      else if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')
      ) {
        roundWinner = 'player';
        playerScore++;
      }
      else if (
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
        (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
        (computerSelection == 'PAPER' && playerSelection == 'ROCK')
      ) {
        roundWinner = 'pc';
        pcScore++;
      }
      return (roundWinner);
}

const btn = document.querySelectorAll('.btn');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        displayResult(playRound(button.getAttribute('id'), computerPlay()));
      });
});

function displayResult(winner) {
    let points = 0;
    if (winner == 'player') points = playerScore;
    else if (winner == 'pc') points = pcScore;
    else if (winner == 'tie') points = 'same';
    //console.log(result.id);
    const result = document.querySelector(".result");
    result.textContent=`The winner is ${winner}. ${winner} has 
        ${points} points!`;
    const scorePlayer = document.getElementById('player-score');
    scorePlayer.textContent = `Player Score: ${playerScore}`;
    const scorePc = document.getElementById('comp-score');
    scorePc.textContent = `Computer Score: ${pcScore}`;
}

/*function scoreIncrease(scorer){
    let playerScore=0;
    let pcScore=0;
    if (scorer=='player'){
        return () => {
            playerScore++;
            console.log(playerScore);
      };
    }
    if (scorer=='pc') {
        return () => {
            pcScore++;
            console.log(pcScore);
        };
    }
}
*/
  
  //const playerSelection = "rock";
  //console.log(playRound(playerSelection, computerPlay()));