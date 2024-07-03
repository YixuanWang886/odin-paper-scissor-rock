let game = () => {
  let round = 5;
  let options = ["paper", "scissors", "rock"];
  let your_score = 0;
  let cpu_score = 0;
  let i = 0;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function updateScore(playerWon) {
    if (playerWon) {
      your_score += 1;
    } else {
      cpu_score += 1;
    }
    let score = document.getElementById("score");
    score.innerHTML = `Your score: ${your_score} CPU score: ${cpu_score}`;
  }
  function updateRound() {
    let current_round = document.getElementById("round");
    current_round.innerHTML = `Round ${i + 1} of ${round}`;
    i += 1;
  }
  function showResult(result) {
    let result_div = document.getElementById("result");
    if (result === "win") {
      result_div.innerHTML = "You win!";
    } else if (result === "lose") {
      result_div.innerHTML = "You lose!";
    } else {
      result_div.innerHTML = "Draw!";
    }
  }
  function upgradeIcon(cpu_option) {
    let cpu_icon = document.getElementById("cpu_opt");
    if (cpu_option === "rock") {
      cpu_icon.src = "./image/rock.png";
    } else if (cpu_option === "paper") {
      cpu_icon.src = "./image/paper.png";
    } else {
      cpu_icon.src = "./image/scissors.png";
    }
  }
  function playGame(playerChoice) {
    if (i >= round) {
      // Check if the game should continue
      return; // Stop the function if 5 rounds are already done
    }

    let cpu_option = options[getRandomInt(3)].toLowerCase();
    if (
      (playerChoice === "scissors" && cpu_option === "rock") ||
      (playerChoice === "paper" && cpu_option === "scissors") ||
      (playerChoice === "rock" && cpu_option === "paper")
    ) {
      updateScore(false);
      showResult("lose");
    } else if (playerChoice !== cpu_option) {
      updateScore(true);
      showResult("win");
    } else {
      showResult("draw");
    }
    upgradeIcon(cpu_option);
    updateRound();

    if (i === round) {
      let score = document.getElementById("score");
      score.innerHTML = `Game finished! you get ${your_score} pints  while cpu get ${cpu_score} points !!!`;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("rock")
      .addEventListener("click", () => playGame("rock"));
    document
      .getElementById("paper")
      .addEventListener("click", () => playGame("paper"));
    document
      .getElementById("scissors")
      .addEventListener("click", () => playGame("scissors"));
  });
};
game();
