# 🎲 Nombre Mystère JavaScript

Le Jeu du Nombre Mystère créé par **Léooo**.

## 📋 Description

Cette application est un jeu ou le but est de déviner le chiffre précis en fonction du niveau. 

## ✨ Fonctionnalités

- 🟢 **Niveau facile** : Devinez un nombre entre 1 et 50
- 🟡 **Niveau moyen** : Devinez un nombre entre 1 et 100  
- 🔴 **Niveau difficile** : Devinez un nombre entre 1 et 500
- 📊 **Historique des parties** : Sauvegarde automatique de toutes les parties jouées dans historique.js
- 🔄 **Rejouabilité** : Possibilités à rejouer à chaque fin de partie.

## 🚀 Installation et utilisation

### Prérequis
- Node.js

### Lancement du jeu
```bash
node NombreMystere.js
```

### Utilisation
1. Choisissez le niveau de difficulté souhaité (1-3) ou quittez (4)
2. Entrez vos propositions de nombres
3. Suivez les indices "C'est plus !" ou "C'est moins !"
4. Trouvez le nombre mystère
5. Votre partie est automatiquement sauvegardée dans l'historique
6. Choisissez si vous voulez rejouer (o/n)

## ⚠️ Contraintes :

- Structure ton code avec au moins 3 fonctions : une pour démarrer, une pour jouer, une pour rejouer.
- Ne pas casser le programme (gestion d’erreur) si l'utilisateur entre un mot au lieu d’un nombre.
- Toujours afficher des messages clairs et interactifs.

## Docs utilisée

- [parseInt()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [fs.writeFileSync()](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)
- [fs.readFileSync()](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)
- [fs.existsSync()](https://nodejs.org/api/fs.html#fs_fs_existssync_path)
- [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## Erreurs rencontrées
Sauvegarde de l'historique des partie avec fs et JSON (25min de comprehension de docs)
