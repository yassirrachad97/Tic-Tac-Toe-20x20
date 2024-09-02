

# Tic-Tac-Toe 20x20

## Description

Ce projet est une version étendue du célèbre jeu de Tic-Tac-Toe, également connu sous le nom de "Morpion", mais joué sur une grille de 20x20. Les joueurs prennent tour à tour pour placer leur symbole ("X" ou "O") sur la grille, avec pour objectif d'aligner 5 de leurs symboles consécutifs horizontalement, verticalement, ou diagonalement pour gagner la partie.

## Fonctionnalités

- **Grille de jeu 20x20** : Le jeu se joue sur une grande grille de 20x20 cases.
- **Deux joueurs** : Le jeu supporte deux joueurs qui jouent l'un contre l'autre en alternance.
- **Détection de victoire** : Le jeu vérifie automatiquement si un joueur a gagné en alignant 5 symboles consécutifs.
- **Réinitialisation du jeu** : Possibilité de réinitialiser la partie pour commencer une nouvelle session de jeu.
- **Déploiement sur AWS** : Le jeu est hébergé sur Amazon Web Services (AWS) pour une accessibilité en ligne.

## Technologies utilisées

- **HTML** : Pour structurer la grille et les éléments du jeu.
- **CSS** : Pour le style et la mise en forme de la grille de jeu et des éléments.
- **JavaScript** : Pour la logique du jeu, incluant les tours des joueurs, la vérification des conditions de victoire, et la gestion des interactions utilisateur.
- **AWS (Amazon Web Services)** : Utilisé pour héberger et déployer l'application web en ligne.

## Comment installer et exécuter le projet localement

1. **Cloner le dépôt** : Clonez ce dépôt sur votre machine locale à l'aide de la commande suivante :
    ```bash
    git clone https://github.com/votre-utilisateur/tic-tac-toe-20x20.git
    ```

2. **Ouvrir le fichier HTML** : Naviguez vers le dossier du projet et ouvrez le fichier `index.html` dans un navigateur web. Aucun serveur local n'est nécessaire.

    ```bash
    cd tic-tac-toe-20x20
    open index.html
    ```

3. **Jouer** : Une fois le fichier ouvert dans le navigateur, vous pouvez commencer à jouer. Cliquez sur les cases pour placer votre symbole.

## Déploiement sur AWS

### Prérequis

- Un compte AWS actif
- AWS CLI installé et configuré sur votre machine locale
- Service AWS utilisé : Amazon S3 pour l'hébergement statique.

### Étapes de déploiement

1. **Création d'un Bucket S3** :

    - Connectez-vous à votre compte AWS.
    - Allez à S3 et créez un nouveau bucket.
    - Nommez votre bucket (assurez-vous que le nom est unique) et sélectionnez une région.
    - Décochez les options de blocage de l'accès public si vous souhaitez que votre site soit accessible publiquement.

2. **Hébergement de site statique** :

    - Après avoir créé le bucket, allez dans les paramètres du bucket.
    - Activez l'hébergement de site statique et spécifiez `index.html` comme document d'index.

3. **Télécharger les fichiers de votre jeu** :

    - Téléchargez les fichiers HTML, CSS, et JavaScript de votre jeu dans le bucket S3.
    - Assurez-vous que les fichiers ont les bonnes permissions (accès public pour le monde entier si c'est un site public).




4. **Accéder à votre site** :

    - Une fois les fichiers téléchargés et configurés, vous pouvez accéder à votre jeu via l'URL du site statique S3 ou via l'URL CloudFront si configuré.

## Logique du jeu

Voici une description de la logique utilisée pour gérer les aspects clés du jeu Tic-Tac-Toe 20x20.

### Initialisation de la Grille

- Une grille de 20x20 est générée à l'aide de HTML, chaque case de la grille étant représentée par un élément `<div>`.
- La grille est initialisée vide, et chaque case a un attribut unique pour suivre sa position.

### Tour des Joueurs

- Deux joueurs sont impliqués, l'un jouant avec le symbole "X" et l'autre avec "O".
- Un compteur est utilisé pour suivre le nombre de tours et pour déterminer quel joueur doit jouer.
- À chaque clic sur une case vide, le symbole du joueur actuel est placé dans cette case.

### Détection de Victoire

- Après chaque coup, le jeu vérifie les conditions de victoire :
    - **Horizontalement** : Vérifie chaque ligne pour voir si 5 symboles identiques sont alignés consécutivement.
    - **Verticalement** : Vérifie chaque colonne pour une séquence de 5 symboles identiques.
    - **Diagonale (gauche à droite)** : Vérifie chaque diagonale de la grille pour une séquence de 5 symboles identiques.
    - **Diagonale (droite à gauche)** : Vérifie l'autre diagonale pour une séquence de 5 symboles identiques.

- Cette vérification se fait en utilisant des boucles imbriquées pour parcourir la grille et vérifier les symboles adjacents.

### Réinitialisation du Jeu

- Un bouton de réinitialisation est fourni pour vider la grille et réinitialiser le compteur de tours, permettant ainsi de commencer une nouvelle partie.


