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
    public getHand(): Card[] {
        return this.hand;
    }
    public addCard(card: Card): void {
        this.hand.push(card);
    }
    public playCard(): Card {
        return this.hand.shift() as Card;
    }
    public displayHand(): string {
        return this.hand.map(card => card.displayCard()).join(", ");
    }

    getNbCards(): number {
        return this.hand.length;
    }
}