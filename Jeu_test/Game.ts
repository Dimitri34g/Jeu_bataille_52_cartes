import { Card } from './Card';
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
        while (!this.hasWinner()) {
            console.log("Nouveau tour !");
            
            const card1 = this.players[0].playCard();
            const card2 = this.players[1].playCard();
    
            console.log(`${this.players[0].getName()} a joué ${card1.displayCard()}`);
            console.log(`${this.players[1].getName()} a joué ${card2.displayCard()}`);
            
            const playedCards: Card[] = [card1, card2];
    
            // Comparaison des valeurs de rang
            if (card1.getRankValue() > card2.getRankValue()) {
                console.log(`${this.players[0].getName()} remporte le pli`);
                this.players[0].addCard(card1);
                this.players[0].addCard(card2);
            } else if (card1.getRankValue() < card2.getRankValue()) {
                console.log(`${this.players[1].getName()} remporte le pli`);
                this.players[1].addCard(card1);
                this.players[1].addCard(card2);
            } else {
                console.log('Bataille !');
                this.handleBattle(playedCards);
            }
    
            this.players.forEach(player => {
                console.log(`${player.getName()} a maintenant ${player.getNbCards()} cartes.`);
            });
        }
    
        const winner = this.hasWinner();
        if (winner) {
            console.log(`${winner.getName()} a gagné la partie !`);
        }
    }
    

    private handleBattle(playedCards: Card[]): void {
        const player1 = this.players[0];
        const player2 = this.players[1];

        if (player1.getNbCards() < 2 || player2.getNbCards() < 2) {
            const winner = player1.getNbCards() > player2.getNbCards() ? player1 : player2;
            console.log(`${winner.getName()} remporte la bataille par défaut en raison du manque de cartes.`);
            playedCards.forEach(card => winner.addCard(card));
            return;
        }

        playedCards.push(player1.playCard(), player2.playCard());

        const card1 = player1.playCard();
        const card2 = player2.playCard();

        console.log(`${player1.getName()} a joué pour la bataille ${card1.displayCard()}`);
        console.log(`${player2.getName()} a joué pour la bataille ${card2.displayCard()}`);

        playedCards.push(card1, card2);

        if (card1.getRankValue() > card2.getRankValue()) {
            console.log(`${player1.getName()} remporte la bataille !`);
            playedCards.forEach(card => player1.addCard(card));
        } else if (card2.getRankValue() > card1.getRankValue()) {
            console.log(`${player2.getName()} remporte la bataille !`);
            playedCards.forEach(card => player2.addCard(card));
        } else {
            console.log("Nouvelle égalité dans la bataille, on relance une autre bataille !");
            this.handleBattle(playedCards);
        }
    }

    public hasWinner(): Player | null {
        return this.players.find(player => player.getNbCards() === 52) || null;
    }

    public startGame(): void {
        this.dealCards();
        console.log(`Début de la partie entre ${this.players[0].getName()} et ${this.players[1].getName()} !`);
        
        this.players.forEach((player) => {
            console.log(`${player.getName()} a ${player.getNbCards()} cartes au début de la partie.`);
        });

        this.players.forEach((player) => {
            console.log(`Main de ${player.getName()} : ${player.displayHand()}`);
        });

        this.playGame();
    }
}
