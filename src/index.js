document.querySelector("button.start-game").onclick = () => {
  startGame();
};

document.getElementById("hit").onclick = () => {
  if (!gameBlocked) {
    hitCard(player);
    updateSum(player);
    checkOutput(player);
  }
};

document.getElementById("stand").onclick = () => {
  console.log("Stand clicked!");
};

function startGame() {
  document.querySelector("button.start-game").className = "start-game hide";

  // Unblocking game state
  gameBlocked = false;

  //   Initializing two cards for the Player and the PC

  assignInitialCards(player);
  updateSum(player);
  assignInitialCards(pc);
  updateSum(pc);

  document.getElementById("next-move").querySelectorAll("button")[0].className =
    "display";
  document.getElementById("next-move").querySelectorAll("button")[1].className =
    "display";
}

function assignInitialCards(player) {
  for (let i = 0; i < 2; i++) {
    const cardRetrieved = grabRandomCard(cardsDeck);
    document.getElementById(player.className).getElementsByClassName("card")[
      i
    ].className = "card display";
    document.getElementById(player.className).getElementsByClassName("card")[
      i
    ].src = cardRetrieved.imageUrl;
    player.hand.push(cardRetrieved);
  }
  // Show sum
  document.getElementById(player.className).querySelector("h3").className =
    "display";
}

function hitCard(player) {
  const cardRetrieved = grabRandomCard(cardsDeck);
  const cardNode = document
    .getElementById(player.className)
    .querySelector(".card")
    .cloneNode(true);
  console.log(cardNode);
  document.getElementById(player.className).appendChild(cardNode);
  console.log(player.hand.length + 1);
  document.getElementById(player.className).lastChild.src =
    cardRetrieved.imageUrl;
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

function checkOutput(player) {
  if (player.sum === 21) {
    gameBlocked = true;
    console.log("You won!");
  } else if (player.sum > 21) {
    gameBlocked = true;
    console.log("You lost!");
  }
}

function decideNextPCMove(player) {}

let gameBlocked = true;
const player = { name: "Player", className: "player", sum: 0, hand: [] };
const pc = { name: "PC", className: "pc", sum: 0, hand: [] };
