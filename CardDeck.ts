import { Card } from './Card';
import { CardFamily } from './CardFamily';
import { CardRank } from './CardRank';


export class CardDeck {
    private deck: Card[];
    constructor() {
    this.deck = [];
    }
    
    public createDeck(): void {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.deck.push(new Card(CardRank[j as unknown as keyof typeof CardRank], CardFamily[i as unknown as keyof typeof CardFamily]));
            }
        }
    }
    public getDeck(): Card[] {
        return this.deck;
    }
    displayDeck(): void {
        this.deck.forEach((card) => {
            console.log(card.getValue());
        });
    }
    shuffleDeck(): void {
        let currentIndex = this.deck.length;
        let randomIndex;
        let tempValue;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            tempValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = tempValue;
        }
}
}
