import { Card } from './Card';
import { CardFamily } from './CardFamily';
import { CardRank } from './CardRank';


export class CardDeck {
    private deck: Card[] = [];
    constructor() {
    this.deck = [];
    }
    
    public createDeck(): void {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.deck.push(new Card(CardRank[j], CardFamily[i]));
            }
        }
    }
}
