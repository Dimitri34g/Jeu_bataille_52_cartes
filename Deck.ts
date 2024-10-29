import { Card } from './Card';

export class Deck {
  suits = ['coeur', 'carreau', 'trèfle', 'pique'];
  ranks = [
    { rank: '2', value: 2 }, { rank: '3', value: 3 }, { rank: '4', value: 4 },
    { rank: '5', value: 5 }, { rank: '6', value: 6 }, { rank: '7', value: 7 },
    { rank: '8', value: 8 }, { rank: '9', value: 9 }, { rank: '10', value: 10 },
    { rank: 'valet', value: 11 }, { rank: 'dame', value: 12 }, { rank: 'roi', value: 13 },
    { rank: 'as', value: 14 }
  ];
  cards: Card[] = [];

  constructor() {
    console.log('Deck: Initialisation du deck');
    this.createDeck();
  }

  createDeck(): void {
    console.log('Deck: Création du deck');
    for (let suit of this.suits) {
      for (let rank of this.ranks) {
        this.cards.push(new Card(suit, rank.rank, rank.value));
      }
    }
  }

  shuffle(): void {
    console.log('Deck: Mélange du deck');
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  displayDeck(): void {
    console.log('Deck: Affichage du deck');
    console.log(this.cards.map(card => card.toString()).join(', '));
  }
}
