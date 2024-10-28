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
    // fait la distribution des cartes sans utiliser .pop()
    public dealCards(): void {
        this.players.forEach((player) => {
            player.addCard(this.deck.getDeck().pop() as Card);
        });
    }
    public playGame(): void {
        this.players.forEach((player) => {
            console.log(`${player.getName()} a joué ${player.playCard().displayCard()}`);
        });
    }
}