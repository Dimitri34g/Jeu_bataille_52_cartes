import { Card } from './Card';

export class Player {
  hand: Card[] = [];

  constructor(public name: string) {
    console.log(`Player: Création du joueur ${name}`);
  }

  drawCard(): Card | null {
    console.log(`Player ${this.name}: Pioche une carte`);
    return this.hand.length > 0 ? this.hand.shift() || null : null;
  }

  addCards(cards: Card[]): void {
    console.log(`Player ${this.name}: Ajoute des cartes à sa main (${cards.map(card => card.toString()).join(', ')})`);
    this.shuffleAndAdd(cards);
  }

  shuffleAndAdd(cards: Card[]): void {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.hand.push(...cards);
  }

  handSize(): number {
    console.log(`Player ${this.name}: Taille de la main (${this.hand.length})`);
    return this.hand.length;
  }
}
