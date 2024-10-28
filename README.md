La méthode `shuffleDeck()` utilise un algorithme de mélange (ou "shuffle") pour mélanger les éléments d’un tableau appelé `deck`. Voici une explication détaillée de son fonctionnement :

### Contexte

Cette méthode mélange aléatoirement les éléments de `this.deck`, qui est probablement un tableau de cartes dans un jeu.

### Détails de la méthode

1. **Initialisation des variables** :

   - `currentIndex` : commence avec la taille du tableau `deck` et sera décrémenté au fur et à mesure pour représenter la partie non mélangée du tableau.
   - `randomIndex` : généré aléatoirement pour chaque itération et représente l'index d’un élément dans `deck` qui sera échangé avec l'élément à `currentIndex - 1`.
   - `tempValue` : variable temporaire utilisée pour faciliter l'échange entre deux éléments.

2. **Boucle `while`** :
   - La boucle continue tant que `currentIndex` n'est pas égal à 0, ce qui signifie qu'il reste des éléments non mélangés.
   - **À chaque itération** :
     - `randomIndex` est calculé comme un entier aléatoire entre `0` et `currentIndex - 1`. Cet index représente une position dans `deck`.
     - `currentIndex` est décrémenté de 1 pour se déplacer vers la gauche dans le tableau.
     - Un échange (ou swap) est effectué entre l'élément `deck[currentIndex]` et `deck[randomIndex]` :
       - `tempValue` prend temporairement la valeur de `deck[currentIndex]`.
       - `deck[currentIndex]` est mis à jour avec la valeur de `deck[randomIndex]`.
       - `deck[randomIndex]` est mis à jour avec `tempValue`, complétant l'échange.

### Pourquoi ça marche ?

Cet algorithme est basé sur le **mélange de Fisher-Yates**, une méthode efficace pour obtenir un mélange uniformément aléatoire d'un tableau. À chaque itération, un élément est échangé avec un autre élément aléatoire qui se trouve encore dans la partie non mélangée du tableau.

### Exemple d'utilisation

Si `this.deck` est initialement `[1, 2, 3, 4]`, après l'exécution de `shuffleDeck()`, le tableau pourrait être dans n'importe quel ordre aléatoire, comme `[3, 1, 4, 2]`.

En résumé, cette méthode mélange le tableau `deck` de manière aléatoire en permutant chaque élément avec un autre élément choisi aléatoirement.
