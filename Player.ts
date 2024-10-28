import { Card } from './Card';
import { CardRank } from './CardRank';
import { CardFamily } from './CardFamily';
import { CardDeck } from './CardDeck';

export class Player {
    private name: string;
    private hand: Card[];
    constructor(name: string) {
        this.name = name;
        this.hand = [];
    }
    public getName(): string {
        return this.name;
    }
    public getHand(): string {
        return `voici la main du joueur ${this.name} : ${this.hand.map(card => card.toString()).join(', ')}`;
    }
    public addCard(card: Card): void {
        this.hand.push(card);
    }
    public playCard(): Card {
        return this.hand.shift() as Card;
    }
}