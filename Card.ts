import { CardRank } from './CardRank';
import { CardFamily } from './CardFamily';


export class Card {
    public value: string;
    public cardRank: CardRank;

    public cardFamily: CardFamily;

    constructor(cardRank: CardRank, cardFamily: CardFamily) {
        this.cardRank = cardRank;
        this.cardFamily = cardFamily;
        this.value = `${cardRank} ${this.cardFamily}`;
    }
    getValue(): string {
        return this.value;
    }
    getCardFamily(): CardFamily {
        return this.cardFamily;
    }
    getCardRank(): CardRank {
        return this.cardRank;
    }
    displayCard(): string {
        
        return `${CardRank[this.cardRank]} de ${CardFamily[this.cardFamily]}`;
    }
}
