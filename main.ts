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
console.log(`voici la main de alice : ${player1.displayHand()}`);
console.log(`voici la main de bob : ${player2.displayHand()}`);
console.log(`voici le nombre de carte de alice : ${player1.getNbCards()}`);
console.log(`voici le nombre de carte de bob : ${player2.getNbCards()}`);
game.playGame();
