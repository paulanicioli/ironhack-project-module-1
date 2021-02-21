let gameBlocked = true;

const player = {
  name: "Player",
  className: "player",
  sum: 0,
  hand: [],
  balance: 0,
  bet: 0,
};

const pc = { name: "PC", className: "pc", sum: 0, hand: [] };

function returnToMainScreen(button) {
  // Hide the toast message again
  const toast = document.getElementById(button);
  toast.className = "toast-message";

  // Clean the Player and Dealer documents regarding current Game
  player.hand = [];
  player.sum = 0;
  player.name = "";
  player.balance = 0;
  pc.hand = [];
  pc.sum = 0;

  // Leave only 2 card images per player
  cleanUpCards(player);
  cleanUpCards(pc);

  // Hide game content
  document.getElementById("game-content").className = "hide";

  // Show initial screen
  document.querySelector("main").className = "";
}

function dealCardsAgain(button) {
  // Unblock game so it can be replayed
  gameBlocked = false;

  // Clean the Player and Dealer documents regarding current Game
  player.hand = [];
  player.sum = 0;
  pc.hand = [];
  pc.sum = 0;

  // Hide the toast message again
  const toast = document.getElementById(button);
  toast.className = "toast-message";

  // Leave only 2 card images per player
  cleanUpCards(player);
  cleanUpCards(pc);

  // Deal cards again
  assignInitialCards(player);
  updateSum(player);
  assignInitialCards(pc);
  updateSum(pc);
  displayActionButtons();
}

function startGame() {
  document.querySelector("main").className = "hide";

  // Unblocking game state
  gameBlocked = false;

  // Adds information from the forms into the player object

  player.balance = parseInt(document.getElementById("initialBalance").value);
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

  // Displaying Game Content
  document.getElementById("game-content").className = "game-display";

  //   Initializing two cards for the Player and the PC

  assignInitialCards(player);
  updateSum(player);
  assignInitialCards(pc);
  updateSum(pc);
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
    document
      .getElementById(player.className)
      .querySelectorAll("div")[1].className = "card-container display";

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

function updateBalance(player, output) {
  if (output === "win") {
    player.balance += player.bet;
  } else {
    player.balance -= player.bet;
  }
  document
    .getElementById(player.className)
    .querySelectorAll("h2 span")[1].innerHTML = printDollarValue(
    player.balance
  );
  if (player.balance < player.bet) {
    callGameOverToast(player.balance > 0);
  }
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
}

function checkFinalOutput() {
  decideNextPCMove();
  showCards(pc);
  if (isBlackjack(player)) {
    checkBlackjack();
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
}

function callLossToast() {
  updateBalance(player, "loss");
  if (player.balance >= player.bet) {
    const toast = document.getElementById("loss");
    toast.querySelector("h5 span").innerHTML = printDollarValue(player.bet);
    toast.className = "toast-message show";
  }
}

function callWinToast() {
  updateBalance(player, "win");
  const toast = document.getElementById("win");
  toast.querySelector("h5 span").innerHTML = printDollarValue(player.bet);
  toast.className = "toast-message show";
}

function callTieToast() {
  const toast = document.getElementById("tie");
  toast.className = "toast-message show";
}

function printDollarValue(number) {
  let stringNumber = "";
  let counter = 0;
  for (let i = String(number).length - 1; i >= 0; i--) {
    if (counter % 3 == 0 && counter > 0) {
      stringNumber = String(number)[i] + "," + stringNumber;
    } else {
      stringNumber = String(number)[i] + stringNumber;
    }
    counter++;
  }
  return "$" + stringNumber;
}

function cleanUpCards(player) {
  document
    .getElementById(player.className)
    .querySelectorAll(
      "div"
    )[1].innerHTML = `<div><img class="card" src="images/purple_back.png" alt="Card Player"></div>
    <div><img class="card" src="images/purple_back.png" alt="Card Player"></div>`;
  if (player.className === "pc") {
    document.getElementById(player.className).querySelector("h3").className =
      "hide";
  }
}

function callBlackjackAnimation() {
  setTimeout(function () {
    blackjackImage.style.display = "none";
  }, 2000);
}
