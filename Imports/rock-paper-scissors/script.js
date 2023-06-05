let player1Score = 0;
let player2Score = 0;


let player1ChoiceEl = document.getElementById("player1");
let player2ChoiceEl = document.getElementById("player2");
let resultEl = document.getElementById("result");


player1ChoiceEl.innerHTML = "Player 1, please make your choice:";


document.onkeypress = function(event) {
  let player1Choice = event.key;
  player1ChoiceEl.innerHTML = "Player 1 chose " + player1Choice;

  
  player2ChoiceEl.innerHTML = "Player 2, please make your choice:";

  
  document.onkeypress = function(event) {
    let player2Choice = event.key;
    player2ChoiceEl.innerHTML = "Player 2 chose " + player2Choice;

    // Determine and display who won
    if (player1Choice === "a" && player2Choice === "s") {
      resultEl.innerHTML = "Player 1 wins! Rock beats scissors.";
      player1Score++;
    } else if (player1Choice === "b" && player2Choice === "a") {
      resultEl.innerHTML = "Player 1 wins! Paper beats rock.";
      player1Score++;
    } else if (player1Choice === "s" && player2Choice === "b") {
      resultEl.innerHTML = "Player 1 wins! Scissors beats paper.";
      player1Score++;
    } else if (player1Choice === player2Choice) {
      resultEl.innerHTML = "It's a tie!";
    } else {
      resultEl.innerHTML = "Player 2 wins!";
      player2Score++;
    }
    // Display scores
    player1ChoiceEl.innerHTML += "<br>Player 1: " + player1Score;
    player2ChoiceEl.innerHTML += "<br>Player 2: " + player2Score;
  }
}
