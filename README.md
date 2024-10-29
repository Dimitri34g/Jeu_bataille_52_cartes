# Bataille - Jeu de Cartes Automatisé

Ce projet est une implémentation automatisée du jeu de cartes "Bataille" en TypeScript. Le jeu simule une partie complète entre deux joueurs, Alice et Bob, avec un jeu de 52 cartes mélangé.

## Fonctionnalités

- Simulation du jeu de Bataille avec deux joueurs.
- Distribution des cartes entre deux joueurs à partir d'un deck de 52 cartes.
- Comparaison des cartes tirées pour déterminer le gagnant de chaque manche.
- Gestion des batailles (situation où deux cartes ont la même valeur).
- Mélange des cartes gagnées avant de les ajouter à la main du joueur.

## Comment jouer ?

Le jeu est entièrement automatisé. Pour lancer une partie, il suffit d'exécuter le fichier `main.ts`. Le jeu distribue les cartes, et les joueurs jouent tour par tour jusqu'à ce qu'un joueur ait gagné toutes les cartes.

Pour exécuter le jeu, vous devez avoir Node.js installé. Exécutez la commande suivante dans le terminal :

```bash
npx ts-node main.ts
```

## Explication du Code

Le code est organisé en plusieurs fichiers TypeScript pour une meilleure organisation :

### Card.ts

La classe `Card` représente une carte du jeu. Chaque carte possède :

- `suit` : la couleur (coeur, carreau, trèfle, pique).
- `rank` : le rang (2, 3, ..., roi, as).
- `value` : une valeur numérique pour comparer les cartes (utilisée pour déterminer le gagnant).

### Deck.ts

La classe `Deck` gère le jeu de 52 cartes :

- `createDeck()` : génère toutes les cartes possibles.
- `shuffle()` : mélange aléatoirement les cartes du deck.
- `displayDeck()` : affiche toutes les cartes du deck.

### Player.ts

La classe `Player` représente un joueur avec sa main de cartes :

- `drawCard()` : pioche la première carte de la main.
- `addCards(cards: Card[])` : ajoute des cartes à la main après avoir mélangé les nouvelles cartes gagnées.
- `handSize()` : retourne la taille de la main du joueur.

### Game.ts

La classe `Game` gère la logique du jeu :

- `distributeCards()` : distribue les cartes aux deux joueurs.
- `play()` : exécute la logique de la partie, où chaque joueur tire une carte et la compare avec celle de l'adversaire.
- `battle()` : gère les batailles (lorsque les cartes des deux joueurs ont la même valeur).

### main.ts

Le fichier principal qui initialise la partie en créant une instance de `Game` et en appelant la méthode `start()`.

## Exécution du Jeu

1. Initialisation : Le jeu commence en créant un deck, le mélangeant, et distribuant les cartes entre les deux joueurs.
2. Tour de jeu : Chaque joueur pioche la première carte de sa main. Le joueur avec la carte la plus élevée gagne les deux cartes et les ajoute à sa main.
3. Bataille : Si les deux cartes ont la même valeur, une bataille est déclenchée, où chaque joueur met une carte face cachée, puis une carte face visible pour déterminer le vainqueur.
4. Fin du Jeu : Le jeu se termine lorsqu'un joueur possède toutes les cartes.

## Technologies Utilisées

- **TypeScript** : pour l'implémentation du jeu et pour tirer parti de la sécurité offerte par le typage statique.
- **Node.js** : pour exécuter le code TypeScript.

## Conclusion

Ce projet est une implémentation simple mais amusante du jeu de Bataille, qui permet de simuler une partie entre deux joueurs virtuels. Les concepts utilisés incluent la gestion de classes, des méthodes pour les manipulations de collections (deck, main du joueur) et des boucles pour la logique de jeu.
