import { Card } from './Card';
import { CardFamily } from './CardFamily';
import { CardRank } from './CardRank';
import { CardDeck } from './CardDeck';
import { Player } from './Player';
import { Game } from './Game';

// Créer les joueurs
const player1 = new Player('Alice');
const player2 = new Player('Bob');

// Créer le jeu
const game = new Game();
game.addPlayer(player1);
game.addPlayer(player2);

// Lancer la partie
game.startGame();

