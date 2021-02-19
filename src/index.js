document.querySelector("button.start-game").onclick = () => {
  startGame();
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

function startGame() {
  document.querySelector("main").className = "hide";

  // Unblocking game state
  gameBlocked = false;

  // Adds information from the forms into the player object

  player.balance = document.getElementById("initialBet").value;
  player.name = document.getElementById("playerName").value;

  document.getElementById("player").querySelector("h2 span").innerHTML =
    player.name;

  document
    .getElementById("player")
    .querySelectorAll("h2 span")[1].innerHTML = printDollarValue(
    player.balance
  );

  //   Initializing two cards for the Player and the PC

  assignInitialCards(player);
  updateSum(player);
  assignInitialCards(pc);
  updateSum(pc);

  // Display Hit and Stand buttons
  document.getElementById("next-move").querySelectorAll("button")[0].className =
    "display";
  document.getElementById("next-move").querySelectorAll("button")[1].className =
    "display";
}

function assignInitialCards(player) {
  for (let i = 0; i < 2; i++) {
    const cardRetrieved = grabRandomCard(cardsDeck);
    document.getElementById(player.className).querySelector("div").className =
      "card-container display";

    document.getElementById(player.className).getElementsByClassName("card")[
      i
    ].src = cardRetrieved.imageUrl;
    player.hand.push(cardRetrieved);
  }
  // Show Player name, bet and current sum
  document.getElementById(player.className).querySelector("h2").className =
    "display";
  document.getElementById(player.className).querySelector("h3").className =
    "display"; // this needs to be commented later on
  if (player.className === "player") {
    document.getElementById(player.className).querySelector("h3").className =
      "display";
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
  document
    .getElementById(player.className)
    .querySelector(".card-container")
    .lastChild.querySelector("img").src = cardRetrieved.imageUrl;
  player.hand.push(cardRetrieved);
}

function updateSum(player) {
  const newSum = player.hand.reduce((acc, element) => {
    return (acc += element.value);
  }, 0);
  player.sum = newSum;
  document
    .getElementById(player.className)
    .querySelector("h3 span").innerHTML = newSum;
}

function checkOutput() {
  if (player.sum === 21) {
    gameBlocked = true;
    callWinToast();
  } else if (player.sum > 21) {
    gameBlocked = true;
    callLossToast();
  }
}

function checkFinalOutput() {
  if (pc.sum > 21) {
    callWinToast();
  } else if (pc.sum > player.sum) {
    callLossToast();
  } else {
    callWinToast();
  }
}

function decideNextPCMove() {
  while (pc.sum < 14) {
    hitCard(pc);
    updateSum(pc);
  }
}

function callLossToast() {
  const toast = document.getElementById("loss");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 6000);
}

function callWinToast() {
  const toast = document.getElementById("win");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 6000);
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
  return stringNumber;
}

let gameBlocked = true;
const player = { name: "Player", className: "player", sum: 0, hand: [] };
const pc = { name: "PC", className: "pc", sum: 0, hand: [] };
