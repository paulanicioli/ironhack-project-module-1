let gameBlocked = true;

const player = {
  name: "Player",
  className: "player",
  sum: 0,
  hand: [],
  balance: 0,
  bet: 0,
  wins: 0,
  losses: 0,
  ties: 0,
  initialBalance: 0,
};

const pc = { name: "PC", className: "pc", sum: 0, hand: [] };

function returnToMainScreen(button) {
  // Hides the toast message again
  const toast = document.getElementById(button);
  toast.className = "toast-message";

  // Cleans the Player and Dealer documents regarding current Game
  player.hand = [];
  player.sum = 0;
  player.name = "";
  player.balance = 0;
  player.initialBalance = 0;
  player.wins = 0;
  player.losses = 0;
  player.ties = 0;
  pc.hand = [];
  pc.sum = 0;

  // Updates wins, losses and ties counts
  document.getElementById("win-count").innerHTML = player.wins;
  document.getElementById("loss-count").innerHTML = player.losses;
  document.getElementById("tie-count").innerHTML = player.ties;

  // Leaves only 2 card images per player
  cleanUpCards(player);
  cleanUpCards(pc);

  // Hides game content
  document.getElementById("game-content").className = "hide";

  // Shows initial screen
  document.querySelector("main").className = "";
  document.querySelector(".initial-form").className = "initial-form";
  document.querySelector(".start-game").className = "start-game start-btn";
  document.querySelector(".steroids-game").className =
    "steroids-game start-btn";
  document.querySelector(".restart").className = "restart start-btn hide";
  document.getElementById("additional-purchase").className = "hide";
}

function buyMoreChips(button) {
  // Hides the toast message again
  const toast = document.getElementById(button);
  toast.className = "toast-message";

  // Leaves only 2 card images per player
  cleanUpCards(player);
  cleanUpCards(pc);

  // Hides game content
  document.getElementById("game-content").className = "hide";

  // Shows form so user purchases more chips
  document.querySelector("main").className = "";
  document.getElementById("additional-purchase").className = "display";
  document.querySelector(".restart.start-btn").className = "restart start-btn";
}

function dealCardsAgain(button) {
  // Unblocks game so it can be replayed
  gameBlocked = false;

  // Cleans the Player and Dealer documents regarding current Game
  player.hand = [];
  player.sum = 0;
  pc.hand = [];
  pc.sum = 0;

  // Hides the toast message again
  const toast = document.getElementById(button);
  toast.className = "toast-message";

  // Leaves only 2 card images per player
  cleanUpCards(player);
  cleanUpCards(pc);

  // Hides next move action buttons
  document.getElementById("next-move").querySelectorAll("div")[0].className =
    "hide";
  document.getElementById("hit").className = "hide";
  document.getElementById("stand").className = "hide";

  // Deal cards again
  assignInitialCards(player);
  updateSum(player);
  assignInitialCards(pc);
  updateSum(pc);
  displayActionButtons();
}

function startGame() {
  document.querySelector("main").className = "hide";
  document.querySelector(".initial-form").className = "initial-form hide";
  document.querySelector(".start-game").className = "start-game hide";
  document.querySelector(".steroids-game").className = "steroids-game hide";

  // Unblocking game state
  gameBlocked = false;

  // Adds information from the forms into the player object

  player.balance = parseInt(document.getElementById("initialBalance").value);
  player.initialBalance = parseInt(
    document.getElementById("initialBalance").value
  );
  player.bet = parseInt(document.getElementById("initialBet").value);
  player.name = document.getElementById("playerName").value;

  document.getElementById("player").querySelector("h2 span").innerHTML =
    player.name;

  document
    .getElementById("player")
    .querySelectorAll("h2 span")[1].innerHTML = printDollarValue(
    player.balance
  );
  document
    .getElementById("player")
    .querySelectorAll("h3 span")[0].innerHTML = printDollarValue(player.bet);

  // Hides next move buttons
  document.getElementById("next-move").querySelectorAll("div")[0].className =
    "hide";
  document.getElementById("hit").className = "hide";
  document.getElementById("stand").className = "hide";

  // Displaying Game Content
  document.getElementById("game-content").className = "game-display";

  //   Initializing two cards for the Player and the PC

  assignInitialCards(player);
  updateSum(player);
  assignInitialCards(pc);
  updateSum(pc);
  displayActionButtons();
}

function restartGame() {
  document.querySelector("main").className = "hide";

  // Unblocking game state
  gameBlocked = false;

  // Displaying Game Content
  document.getElementById("game-content").className = "game-display";

  displayActionButtons();
}

function displayActionButtons() {
  document.getElementById("next-move").querySelectorAll("div")[1].className =
    "display";
  document.getElementById("halve").className = "action-button";
  document.getElementById("double").className = "action-button";
  document.getElementById("show-cards").className = "action-button";
}

function assignInitialCards(player) {
  for (let i = 0; i < 2; i++) {
    const cardRetrieved = grabRandomCard(cardsDeck);
    document.getElementById(player.className).querySelectorAll("div")[
      player.className === "player" ? 4 : 1
    ].className = "card-container display";

    player.hand.push(cardRetrieved);
    reshuffleDeck();
  }
  // Show Player name
  document.getElementById(player.className).querySelector("h2").className =
    "display";

  // Show balance and bet for Player

  if (player.className === "player") {
    document
      .getElementById(player.className)
      .querySelectorAll("h3")[0].className = "display";
    document
      .getElementById(player.className)
      .querySelectorAll("h2")[1].className = "display";
  }
}

function hitCard(player) {
  const cardRetrieved = grabRandomCard(cardsDeck);
  const cardNode = document
    .getElementById(player.className)
    .querySelector(".card-container")
    .querySelector("div")
    .cloneNode(true);
  document
    .getElementById(player.className)
    .querySelector(".card-container")
    .appendChild(cardNode);
  if (player.className === "player") {
    document
      .getElementById(player.className)
      .querySelector(".card-container")
      .lastChild.querySelector("img").src = cardRetrieved.imageUrl;
  }
  player.hand.push(cardRetrieved);
  reshuffleDeck();
}

function showCards(player) {
  // Showing sum for Dealer cards
  document.getElementById(player.className).querySelectorAll("h3")[
    player.className === "player" ? 1 : 0
  ].className = "display";

  // Updating card images for dealer
  for (let i = 0; i < player.hand.length; i++) {
    const cardNode = document
      .getElementById(player.className)
      .querySelector(".card-container")
      .querySelectorAll("div")[i];
    cardNode.querySelector("img").src = player.hand[i].imageUrl;
  }
}

function updateSum(player) {
  let newSum = player.hand.reduce((acc, element) => {
    return (acc += element.value);
  }, 0);
  if (isBlackjack(player)) {
    newSum = 21;
  }
  player.sum = newSum;
  document.getElementById(player.className).querySelectorAll("h3 span")[
    player.className === "player" ? 1 : 0
  ].innerHTML = newSum;
}

function updateBalance(output) {
  if (output === "win") {
    player.balance += player.bet;
  } else if (output === "loss") {
    player.balance -= player.bet;
  }
  document
    .getElementById(player.className)
    .querySelectorAll("h2")[1].className = "animate__animated animate__bounce";
  document
    .getElementById(player.className)
    .querySelectorAll("h2 span")[1].innerHTML = printDollarValue(
    player.balance
  );
  if (player.balance < player.bet) {
    callGameOverToast(player.balance > 0);
  }
  document.getElementById("net-balance").innerHTML = printDollarValue(
    player.balance - player.initialBalance
  );
}

function checkOutput() {
  if (player.sum > 21) {
    gameBlocked = true;
    callLossToast();
  } else if (player.sum === 21) {
    if (isBlackjack(pc)) {
      callLossToast();
    } else {
      decideNextPCMove();
      showCards(pc);
      if (pc.sum === 21) {
        callTieToast();
      } else {
        callWinToast();
      }
    }
  }
}

function checkBlackjack() {
  gameBlocked = true;
  if (isBlackjack(pc)) {
    callTieToast();
  } else {
    callWinToast();
  }
  showCards(pc);
  callBlackjackAnimation();
}

function checkFinalOutput() {
  decideNextPCMove();
  showCards(pc);
  if (isBlackjack(player)) {
    checkBlackjack();
    callBlackjackAnimation();
  } else if (player.sum === 21) {
    if (isBlackjack(pc)) {
      callLossToast();
    } else if (pc.sum !== 21) {
      callWinToast();
    } else {
      callTieToast();
    }
  } else if (pc.sum > 21) {
    callWinToast();
  } else if (pc.sum === player.sum) {
    callTieToast();
  } else if (pc.sum > player.sum) {
    callLossToast();
  } else {
    callWinToast();
  }
}

function isBlackjack(player) {
  if (player.hand.length > 2) {
    return false;
  }
  if (
    (player.hand[0].isAce && player.hand[1].value === 10) ||
    (player.hand[1].isAce && player.hand[0].value === 10)
  ) {
    return true;
  } else {
    return false;
  }
}

function decideNextPCMove() {
  while (pc.sum < 17) {
    hitCard(pc);
    updateSum(pc);
    reshuffleDeck();
  }
}

function callGameOverToast(boolean) {
  const changeBetBtn = document.querySelector(".change-bet");
  changeBetBtn.querySelector("span").innerHTML = printDollarValue(
    player.balance
  );
  if (!boolean) {
    changeBetBtn.className = "change-bet toast-btn hide";
  } else {
    changeBetBtn.className = "change-bet toast-btn";
  }

  const toast = document.getElementById("game-over");
  toast.className = "toast-message show";
  document.getElementById("alert").play();
}

function callLossToast() {
  updateBalance("loss");
  lostMoney();
  document.getElementById("push-chips").play();
  if (player.balance >= player.bet) {
    const toast = document.getElementById("loss");
    toast.querySelector("h5 span").innerHTML = printDollarValue(player.bet);
    toast.className = "toast-message show";
  }
  player.losses++;
  document.getElementById("loss-count").innerHTML = player.losses;
}

function callWinToast() {
  updateBalance("win");
  gainedMoney();
  document.getElementById("push-chips").play();
  const toast = document.getElementById("win");
  toast.querySelector("h5 span").innerHTML = printDollarValue(player.bet);
  toast.className = "toast-message show";
  player.wins++;
  document.getElementById("win-count").innerHTML = player.wins;
}

function callTieToast() {
  const toast = document.getElementById("tie");
  toast.className = "toast-message show";
  player.ties++;
  document.getElementById("tie-count").innerHTML = player.ties;
}

function printDollarValue(number) {
  let stringNumber = "";
  let counter = 0;
  for (let i = String(Math.abs(number)).length - 1; i >= 0; i--) {
    if (counter % 3 == 0 && counter > 0) {
      stringNumber = String(Math.abs(number))[i] + "," + stringNumber;
    } else {
      stringNumber = String(Math.abs(number))[i] + stringNumber;
    }
    counter++;
  }
  return (number < 0 ? "-" : "") + "$" + stringNumber;
}

function cleanUpCards(player) {
  document.getElementById(player.className).querySelectorAll("div")[
    player.className === "pc" ? 1 : 4
  ].innerHTML = `<div><img class="card" src="images/purple_back.png" alt="Card Player"></div>
    <div><img class="card" src="images/purple_back.png" alt="Card Player"></div>`;
  document.getElementById(player.className).querySelectorAll("h3")[
    player.className === "pc" ? 0 : 1
  ].className = "hide";
}

function callBlackjackAnimation() {
  console.log("Blackjack animation has been called!");
  document.getElementById("blackjack").className =
    "transitions animate__animated animate__heartBeat";
  setTimeout(function () {
    document.getElementById("blackjack").className = "hide";
  }, 2000);
}

function lostMoney() {
  console.log("Money loss animation has been called!");
  document.getElementById("money-loss").className =
    "transitions animate__animated animate__fadeOutDown";
  setTimeout(function () {
    document.getElementById("money-loss").className = "hide";
  }, 2000);
}

function gainedMoney() {
  console.log("Money gain animation has been called!");
  document.getElementById("money-gain").className =
    "transitions animate__animated animate__fadeOutUp";
  setTimeout(function () {
    document.getElementById("money-gain").className = "hide";
  }, 2000);
}
