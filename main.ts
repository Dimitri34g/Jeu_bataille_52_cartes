import { Card } from './Card';
import { CardFamily } from './CardFamily';
import { CardRank } from './CardRank';
import { CardDeck } from './CardDeck';


const deuxDeCoeur = new Card(CardRank.DEUX, CardFamily.COEUR);
console.log(deuxDeCoeur.displayCard());
const deck = new CardDeck();
deck.createDeck();
console.log(deck.getDeck());
deck.shuffleDeck();
console.log(deck.getDeck());