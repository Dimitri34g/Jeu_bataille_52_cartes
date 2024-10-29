import { Deck } from './Deck';
import { Player } from './Player';
import { Card } from './Card';

export class Game {
  deck: Deck;
  player1: Player;
  player2: Player;
  battleLimit: number = 100;

  constructor() {
    console.log('Game: Initialisation du jeu');
    this.deck = new Deck();
    this.player1 = new Player('Alice');
    this.player2 = new Player('Bob');
  }

  start(): void {
    console.log('Game: Début de la partie de Bataille !');
    console.log('Game: Création du deck...');
    this.deck.displayDeck();
    console.log('Game: Mélange du deck...');
    this.deck.shuffle();
    this.deck.displayDeck();
    this.distributeCards();
    console.log('Game: Cartes distribuées !');
    console.log('Main de Alice:', this.player1.hand.map(card => card.toString()).join(', '));
    console.log('Main de Bob:', this.player2.hand.map(card => card.toString()).join(', '));
    this.play();
  }

  distributeCards(): void {
    console.log('Game: Distribution des cartes');
    for (let i = 0; i < this.deck.cards.length; i++) {
      if (i % 2 === 0) {
        console.log(`Game: Distribution de la carte ${this.deck.cards[i].toString()} à Alice`);
        this.player1.addCards([this.deck.cards[i]]);
      } else {
        console.log(`Game: Distribution de la carte ${this.deck.cards[i].toString()} à Bob`);
        this.player2.addCards([this.deck.cards[i]]);
      }
    }
  }

  play(): void {
    console.log('Game: Début de la partie');
    while (this.player1.handSize() > 0 && this.player2.handSize() > 0) {
      const card1 = this.player1.drawCard();
      const card2 = this.player2.drawCard();

      if (!card1 || !card2) break;

      console.log(`Game: Alice joue ${card1.toString()} - Bob joue ${card2.toString()}`);
      if (card1.value > card2.value) {
        console.log('Game: Alice remporte la manche');
        this.player1.addCards([card1, card2]);
      } else if (card2.value > card1.value) {
        console.log('Game: Bob remporte la manche');
        this.player2.addCards([card1, card2]);
      } else {
        console.log('Game: Bataille !');
        this.battle([card1, card2]);
      }
      console.log(`Game: Nombre de cartes - Alice: ${this.player1.handSize()}, Bob: ${this.player2.handSize()}`);
    }

    const winner = this.player1.handSize() > 0 ? 'Alice' : 'Bob';
    console.log(`Game: ${winner} a gagné la partie !`);
  }

  battle(cardsInPlay: Card[]): void {
    console.log('Game: Début de la bataille');
    let battleCount = 0;
    while (battleCount < this.battleLimit) {
      const card1Hidden = this.player1.drawCard();
      const card2Hidden = this.player2.drawCard();
      const card1Visible = this.player1.drawCard();
      const card2Visible = this.player2.drawCard();

      if (!card1Hidden || !card2Hidden || !card1Visible || !card2Visible) {
        console.log(`Game: Fin de la bataille - un joueur n'a plus de cartes`);
        break;
      }

      cardsInPlay.push(card1Hidden, card2Hidden, card1Visible, card2Visible);
      console.log(`Game: Alice joue face visible ${card1Visible.toString()} - Bob joue face visible ${card2Visible.toString()}`);

      if (card1Visible.value > card2Visible.value) {
        console.log('Game: Alice remporte la bataille');
        this.player1.addCards(cardsInPlay);
        break;
      } else if (card2Visible.value > card1Visible.value) {
        console.log('Game: Bob remporte la bataille');
        this.player2.addCards(cardsInPlay);
        break;
      } else {
        console.log('Game: Nouvelle bataille !');
        battleCount++;
      }
    }

    if (battleCount >= this.battleLimit) {
      console.log('Game: Limite de batailles atteinte, les cartes sont partagées entre les deux joueurs');
      this.player1.addCards(cardsInPlay.slice(0, cardsInPlay.length / 2));
      this.player2.addCards(cardsInPlay.slice(cardsInPlay.length / 2));
    }
  }
}
