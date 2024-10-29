import { CardRank } from './CardRank';
import { CardFamily } from './CardFamily';

export class Card {
    public cardRank: CardRank;
    public cardFamily: CardFamily;

    constructor(cardRank: CardRank, cardFamily: CardFamily) {
        this.cardRank = cardRank;
        this.cardFamily = cardFamily;
    }

    getCardFamily(): CardFamily {
        return this.cardFamily;
    }

    getCardRank(): CardRank {
        return this.cardRank;
    }

    // Utilise la valeur numérique pour la hiérarchie des cartes (2 à 14)
    public getRankValue(): number {
        const rankOrder = {
            [CardRank.DEUX]: 2,
            [CardRank.TROIS]: 3,
            [CardRank.QUATRE]: 4,
            [CardRank.CINQUE]: 5,
            [CardRank.SIX]: 6,
            [CardRank.SEPT]: 7,
            [CardRank.HUIT]: 8,
            [CardRank.NEUF]: 9,
            [CardRank.DIX]: 10,
            [CardRank.VALET]: 11,
            [CardRank.DAME]: 12,
            [CardRank.ROI]: 13,
            [CardRank.AS]: 14,
        };
        return rankOrder[this.cardRank];
    }

    displayCard(): string {
        return `${CardRank[this.cardRank]} de ${CardFamily[this.cardFamily]}`;
    }
}
