import { Card } from './Card';
import { CardRank } from './CardRank';
import { CardFamily } from './CardFamily';
import { CardDeck } from './CardDeck';
import { Player } from './Player';

export class Game {
    private players: Player[];
    private deck: CardDeck;
    constructor() {
        this.players = [];
        this.deck = new CardDeck();
        this.deck.createDeck();
        this.deck.shuffleDeck();
    }
    public addPlayer(player: Player): void {
        this.players.push(player);
    }
    public dealCards(): void {
        let currentPlayerIndex = 0;
        while (this.deck.getDeck().length > 0) {
            const card = this.deck.getDeck().pop() as Card;
            this.players[currentPlayerIndex].addCard(card);
            currentPlayerIndex = (currentPlayerIndex + 1) % this.players.length;
        }
    }
    
    public playGame(): void {
        this.players.forEach((player) => {
            console.log(`${player.getName()} a joué ${player.playCard().displayCard()}`);
        });
    }
    // méthode pour lancer la jeu
    
    // boucle pour le jeu de carte

    // méthode pour définir si le joueur a gagné
}