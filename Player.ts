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
        return this.hand.map(card => card.getValue()).join(", ");
    }

    // public displayHand(): void {
    //     console.log(`Voici la main de ${this.name} :`);
    //     this.hand.forEach((card) => {
    //         const rankName = CardRank[card.cardRank];
    //         const familyName = CardFamily[card.cardFamily];
    //         console.log(`${rankName} de ${familyName}`);
    //     });
    // }

    getNbCards(): number {
        return this.hand.length;
    }
}