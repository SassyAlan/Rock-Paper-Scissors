let roundWinner = '';

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
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        roundWinner = 'tie';
        console.log(roundWinner + ' ' + playerSelection + computerSelection);
      }
      if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')
      ) {
        roundWinner = 'player';
        console.log(roundWinner + ' ' + playerSelection + computerSelection);
      }
      if (
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
        (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
        (computerSelection == 'PAPER' && playerSelection == 'ROCK')
      ) {
        roundWinner = 'computer';
        console.log(roundWinner + ' ' + playerSelection + computerSelection);
      } 
}

function scoreIncrease(scorer){
    let playerScore=0;
    let pcScore=0;
    if (scorer=='player'){
        return () => {
            playerScore++;
      };
    }
    if (scorer=='pc') {
        return () => {
            pcScore++;
        };
    }
}


  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));