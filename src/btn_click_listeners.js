document.querySelector("button.start-game").onclick = () => {
  if (
    document.getElementById("initialBalance").value == "" ||
    document.getElementById("initialBet").value == "" ||
    parseInt(document.getElementById("initialBalance").value) <
      parseInt(document.getElementById("initialBet").value)
  ) {
    const toast = document.getElementById("form-misfilled");
    toast.className = "toast-message show";
  } else {
    startGame();
  }
};

document.getElementById("hit").onclick = () => {
  if (!gameBlocked) {
    hitCard(player);
    updateSum(player);
    checkOutput();
  }
};

document.getElementById("stand").onclick = () => {
  if (!gameBlocked) {
    decideNextPCMove();
    checkFinalOutput();
    gameBlocked = true;
  }
};

document.getElementById("double").onclick = () => {
  if (player.balance >= 2 * player.bet) {
    player.bet *= 2;
    document
      .getElementById(player.className)
      .querySelectorAll("h3 span")[0].innerHTML = printDollarValue(player.bet);
  } else {
    const toast = document.getElementById("block-double-bet");
    toast.className = "toast-message show";
  }
};

document.getElementById("halve").onclick = () => {
  player.bet = Math.ceil(player.bet / 2);
  document
    .getElementById(player.className)
    .querySelectorAll("h3 span")[0].innerHTML = printDollarValue(player.bet);
};

document
  .getElementById("loss")
  .querySelector(".deal-cards-again").onclick = () => {
  dealCardsAgain("loss");
};

document
  .getElementById("win")
  .querySelector(".deal-cards-again").onclick = () => {
  dealCardsAgain("win");
};

document
  .getElementById("tie")
  .querySelector(".deal-cards-again").onclick = () => {
  dealCardsAgain("tie");
};

document.getElementById("loss").querySelector(".main-screen").onclick = () => {
  returnToMainScreen("loss");
};

document.getElementById("win").querySelector(".main-screen").onclick = () => {
  returnToMainScreen("win");
};

document.getElementById("tie").querySelector(".main-screen").onclick = () => {
  returnToMainScreen("tie");
};

document
  .getElementById("game-over")
  .querySelector(".main-screen").onclick = () => {
  returnToMainScreen("game-over");
};

document
  .getElementById("game-over")
  .querySelector(".change-bet").onclick = () => {
  player.bet = player.balance;
  document
    .getElementById(player.className)
    .querySelector("h3 span").innerHTML = printDollarValue(player.bet);
  dealCardsAgain("game-over");
};

document
  .getElementById("block-double-bet")
  .querySelector(".main-screen").onclick = () => {
  returnToMainScreen("block-double-bet");
};

document
  .getElementById("block-double-bet")
  .querySelector(".change-bet").onclick = () => {
  const toast = document.getElementById("block-double-bet");
  toast.className = "toast-message";
};

document
  .getElementById("form-misfilled")
  .querySelector(".main-screen").onclick = () => {
  returnToMainScreen("form-misfilled");
};