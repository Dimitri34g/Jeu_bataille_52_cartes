import { Card } from './Card';
import { CardFamily } from './CardFamily';
import { CardRank } from './CardRank';
import { CardDeck } from './CardDeck';
import { Player } from './Player';
import { Game } from './Game';


const deuxDeCoeur = new Card(CardRank.DEUX, CardFamily.COEUR);
console.log(deuxDeCoeur.displayCard());
const deck = new CardDeck();
deck.createDeck();
console.log(deck.getDeck());
deck.shuffleDeck();
console.log(deck.getDeck());
const player1 = new Player('Alice');
const player2 = new Player('Bob');

const game = new Game();
game.addPlayer(player1);
game.addPlayer(player2);
game.dealCards();
console.log(player1.getHand());
console.log(player2.getHand());
game.playGame();