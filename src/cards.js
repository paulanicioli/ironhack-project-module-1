// Defining all Objects belonging to a full deck of cards

const fullDeck = [
  {
    name: "Ace of Spades",
    value: 1,
    isAce: true,
    imageUrl: "images/AS.png",
  },
  {
    name: "Ace of Hearts",
    value: 1,
    isAce: true,
    imageUrl: "images/AH.png",
  },
  {
    name: "Ace of Clubs",
    value: 1,
    isAce: true,
    imageUrl: "images/AC.png",
  },
  {
    name: "Ace of Diamonds",
    value: 1,
    isAce: true,
    imageUrl: "images/AD.png",
  },
  {
    name: "Two of Spades",
    value: 2,
    isAce: false,
    imageUrl: "images/2S.png",
  },
  {
    name: "Two of Hearts",
    value: 2,
    isAce: false,
    imageUrl: "images/2H.png",
  },
  {
    name: "Two of Clubs",
    value: 2,
    isAce: false,
    imageUrl: "images/2C.png",
  },
  {
    name: "Two of Diamonds",
    value: 2,
    isAce: false,
    imageUrl: "images/2D.png",
  },
  {
    name: "Three of Spades",
    value: 3,
    isAce: false,
    imageUrl: "images/3S.png",
  },
  {
    name: "Three of Hearts",
    value: 3,
    isAce: false,
    imageUrl: "images/3H.png",
  },
  {
    name: "Three of Clubs",
    value: 3,
    isAce: false,
    imageUrl: "images/3C.png",
  },
  {
    name: "Three of Diamonds",
    value: 3,
    isAce: false,
    imageUrl: "images/3D.png",
  },
  {
    name: "Four of Spades",
    value: 4,
    isAce: false,
    imageUrl: "images/4S.png",
  },
  {
    name: "Four of Hearts",
    value: 4,
    isAce: false,
    imageUrl: "images/4H.png",
  },
  {
    name: "Four of Clubs",
    value: 4,
    isAce: false,
    imageUrl: "images/4C.png",
  },
  {
    name: "Four of Diamonds",
    value: 4,
    isAce: false,
    imageUrl: "images/4D.png",
  },
  {
    name: "Five of Spades",
    value: 5,
    isAce: false,
    imageUrl: "images/5S.png",
  },
  {
    name: "Five of Hearts",
    value: 5,
    isAce: false,
    imageUrl: "images/5H.png",
  },
  {
    name: "Five of Clubs",
    value: 5,
    isAce: false,
    imageUrl: "images/5C.png",
  },
  {
    name: "Five of Diamonds",
    value: 5,
    isAce: false,
    imageUrl: "images/5D.png",
  },
  {
    name: "Six of Spades",
    value: 6,
    isAce: false,
    imageUrl: "images/6S.png",
  },
  {
    name: "Six of Hearts",
    value: 6,
    isAce: false,
    imageUrl: "images/6H.png",
  },
  {
    name: "Six of Clubs",
    value: 6,
    isAce: false,
    imageUrl: "images/6C.png",
  },
  {
    name: "Six of Diamonds",
    value: 6,
    isAce: false,
    imageUrl: "images/6D.png",
  },
  {
    name: "Seven of Spades",
    value: 7,
    isAce: false,
    imageUrl: "images/7S.png",
  },
  {
    name: "Seven of Hearts",
    value: 7,
    isAce: false,
    imageUrl: "images/7H.png",
  },
  {
    name: "Seven of Clubs",
    value: 7,
    isAce: false,
    imageUrl: "images/7C.png",
  },
  {
    name: "Seven of Diamonds",
    value: 7,
    isAce: false,
    imageUrl: "images/7D.png",
  },
  {
    name: "Eight of Spades",
    value: 8,
    isAce: false,
    imageUrl: "images/8S.png",
  },
  {
    name: "Eight of Hearts",
    value: 8,
    isAce: false,
    imageUrl: "images/8H.png",
  },
  {
    name: "Eight of Clubs",
    value: 8,
    isAce: false,
    imageUrl: "images/8C.png",
  },
  {
    name: "Eight of Diamonds",
    value: 8,
    isAce: false,
    imageUrl: "images/8D.png",
  },
  {
    name: "Nine of Spades",
    value: 9,
    isAce: false,
    imageUrl: "images/9S.png",
  },
  {
    name: "Nine of Hearts",
    value: 9,
    isAce: false,
    imageUrl: "images/9H.png",
  },
  {
    name: "Nine of Clubs",
    value: 9,
    isAce: false,
    imageUrl: "images/9C.png",
  },
  {
    name: "Nine of Diamonds",
    value: 9,
    isAce: false,
    imageUrl: "images/9D.png",
  },
  {
    name: "Ten of Spades",
    value: 10,
    isAce: false,
    imageUrl: "images/10S.png",
  },
  {
    name: "Ten of Hearts",
    value: 10,
    isAce: false,
    imageUrl: "images/10H.png",
  },
  {
    name: "Ten of Clubs",
    value: 10,
    isAce: false,
    imageUrl: "images/10C.png",
  },
  {
    name: "Ten of Diamonds",
    value: 10,
    isAce: false,
    imageUrl: "images/10D.png",
  },
  {
    name: "Queen of Spades",
    value: 10,
    isAce: false,
    imageUrl: "images/QS.png",
  },
  {
    name: "Queen of Hearts",
    value: 10,
    isAce: false,
    imageUrl: "images/QH.png",
  },
  {
    name: "Queen of Clubs",
    value: 10,
    isAce: false,
    imageUrl: "images/QC.png",
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    isAce: false,
    imageUrl: "images/QD.png",
  },
  {
    name: "Jack of Spades",
    value: 10,
    isAce: false,
    imageUrl: "images/JS.png",
  },
  {
    name: "Jack of Hearts",
    value: 10,
    isAce: false,
    imageUrl: "images/JH.png",
  },
  {
    name: "Jack of Clubs",
    value: 10,
    isAce: false,
    imageUrl: "images/JC.png",
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    isAce: false,
    imageUrl: "images/JD.png",
  },
  {
    name: "King of Spades",
    value: 10,
    isAce: false,
    imageUrl: "images/KS.png",
  },
  {
    name: "King of Hearts",
    value: 10,
    isAce: false,
    imageUrl: "images/KH.png",
  },
  {
    name: "King of Clubs",
    value: 10,
    isAce: false,
    imageUrl: "images/KC.png",
  },
  {
    name: "King of Diamonds",
    value: 10,
    isAce: false,
    imageUrl: "images/KD.png",
  },
];

let cardsDeck = [...fullDeck];

function grabRandomCard(array) {
  const index = Math.floor(Math.random() * array.length);
  const card = array[index];
  array.splice(index, 1);
  return card;
}

function reshuffleDeck() {
  if (cardsDeck.length === 0) {
    cardsDeck = [...fullDeck];
    console.log("Deck has been reshuffled!");
  }
}
