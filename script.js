let roundWinner = '';
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
    playerSelection = playerSelection.toUpperCase();
      if (playerSelection == computerSelection) {
        roundWinner = 'tie';
        return(roundWinner + ' ' + playerSelection + computerSelection);
      }
      else if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')
      ) {
        roundWinner = 'player';
        playerScore++;
        return(roundWinner + ' won and got ' + playerScore + ' points. ' + playerSelection + ' ' + computerSelection);
      }
      else if (
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
        (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
        (computerSelection == 'PAPER' && playerSelection == 'ROCK')
      ) {
        roundWinner = 'pc';
        pcScore++;
        return(roundWinner + ' won and got ' + pcScore + ' points. ' + playerSelection + ' ' + computerSelection);
      }
      return ('please give a valid input');
}

function game () {
    for (i = 0; i < 5; i ++) {
        let sign = prompt("What's your move?");
        alert(playRound(sign, computerPlay()));
    }
}

game ();


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