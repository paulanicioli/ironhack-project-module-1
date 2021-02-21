# Welcome to Blackjack!

![](images/welcome_screen.PNG)

Feeling lucky today, heh? Play Blackjack in [here](https://paulanicioli.github.io/ironhack-project-module-1/)!

### Context

This game was developed under the scope of the Part-Time Web Development Bootcamp at Ironhack.

### Game history

Blackjack, also known as Twenty-One or Vingt-et-Un, is one of the most popular gambling card games (second only to poker). Many believe that it has its origins in the 1700s France.

The game name has shuffled to Blackjack in the 20th century, when bonus payouts were common if a black jack (a jack of spades or clubs) was dealt along with an ace of spades. As the game gained popularity, those bonuses faded away, but the informal name was already stuck.

The goal is to get a card count as close to 21 as possible (without going over this number), so the player can beat the dealer.

### Game rules

While the rules are rather simple, it allows for a lot of strategy (cough~~countingcards~~cough).

**Card Values**
| Card | Value |
|--------------|----------------------------|
| Ace | 1 or 11 (up to the player) |
| Face cards | 10 |
| Number cards | Their pip value |

**Betting**

- Bets (dollar amounts bet in each round) must be made before cards are dealt.
- If the Player wins, he collects from the Dealer the same $ amount they have bet, unless the Player has a blackjack (in which case there is usually a bonus and the Dealer pays 1.5 times the $ amount originally bet to the Player).
- If the Dealer wins, the Player loses all he has bet in that round.
- If there is a tie, no $ amount is collected.

**Cards Distribution**

- The standard 52-pack card is used. The most common game is the one that uses six standard decks.
- Each player is given 2 cards.
- After receiving their first 2 cards, the player will choose to **Hit** (pick another card from the deck) or **Stand** (not pick any other card and finish its round).

**Dealer Play**

- After each player has chosen to **Stand**, it is the Dealer's turn to draw cards.
- The Dealer must continue to hit cards until its sum reaches 17 or more.

### Who Wins?

1. If the Player's cards yield a sum larger than 21, we say the Player **has gone Bust** and they have lost the bet, regardless of the Dealer's hand.
2. If the Player has a **blackjack** (also called a **natural**, meaning they have an ace and a 10-value card), the Player wins, unless the Dealer also has a blackjack - in which case there is a tie.
3. If the Player's cards yield a 21-sum, the Player wins, unless the Dealer has a blackjack (in which case the Dealer wins) or has cards that yield a 21-sum (in which case there is a tie).
4. If the Player's cards yield a lower-than-21-sum, the Player wins if the Dealer either busts or has an even lower sum. If the Dealer has a sum larger than the Player's and lower or equal to 21, then the Dealer has won. If the Player's and Dealer's sums are equal, then we have a tie.

All possible outcomes are described in the table below, where Sum = 21 describes the case where the sum yields 21 but the cards are not a blackjack/natural.

| Player        | Dealer           | Winner |
| ------------- | ---------------- | ------ |
| Sum > 21      | -                | Dealer |
| Blackjack     | Blackjack        | TIE    |
| Blackjack     | Not Blackjack    | Player |
| Not Blackjack | Blackjack        | Dealer |
| Sum = 21      | Sum = 21         | TIE    |
| Sum = 21      | Sum != 21        | Player |
| Sum != 21     | Sum = 21         | Dealer |
| Sum = P < 21  | Sum = D < P      | Player |
| Sum = P < 21  | P < Sum = D < 21 | Dealer |
| Sum = P < 21  | Sum = D = P      | TIE    |

### Resources

Many of the rules and game history information were obtained from [Crescent School](https://crescent.edu/post/the-history-of-blackjack) and [BicycleCards](https://bicyclecards.com/how-to-play/blackjack/).
