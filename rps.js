function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSel, cpuSel) {
  playerSel = playerSel.charAt(0).toUpperCase() + playerSel.slice(1);
  cpuSel = cpuSel.charAt(0).toUpperCase() + cpuSel.slice(1);

  if (playerSel === cpuSel) {
    console.log(`You both choose ${playerSel}. It's a draw.`);
    return score;
  } else if (playerSel === "Rock" && cpuSel === "Scissors") {
    console.log(`You: ${playerSel}. CPU: ${cpuSel}. You win!`);
    return (score += 1);
  } else if (playerSel === "Paper" && cpuSel === "Rock") {
    console.log(`You: ${playerSel}. CPU: ${cpuSel}. You win!`);
    return (score += 1);
  } else if (playerSel === "Scissors" && cpuSel === "Paper") {
    console.log(`You: ${playerSel}. CPU: ${cpuSel}. You win!`);
    return (score += 1);
  } else {
    console.log(`You: ${playerSel}. CPU: ${cpuSel}. You lose!`);
    return (score -= 1);
  }
}

let score = 0;
const buttons = document.querySelectorAll(".btn");
const number = document.querySelector("#bruhscore");
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    playerSel = btn.textContent;
    cpuSel = computerPlay();
    playRound(playerSel, cpuSel);
    number.textContent = score;
  })
);
