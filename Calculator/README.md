# 🧮 Calculatrice JavaScript

Une calculatrice interactive en ligne de commande créée par **Léooo**.

## 📋 Description

Cette application est une calculatrice simple qui permet d'effectuer les quatre opérations de base dans le terminal.

## ✨ Fonctionnalités

- ➕ **Addition** : Additionne deux nombres
- ➖ **Soustraction** : Soustrait deux nombres  
- ✖️ **Multiplication** : Multiplie deux nombres
- ➗ **Division** : Divise deux nombres

## 🚀 Installation et utilisation

### Prérequis
- Node.js

### Lancement de la calculatrice
```bash
node Calculator.js
```

### Utilisation
1. Choisissez l'opération souhaitée en tapant le chiffre correspondant (1-4)
2. Entrez le premier nombre
3. Entrez le deuxième nombre
4. Le résultat s'affiche automatiquement
5. Choisissez si vous voulez continuer (o/n)

## ⚠️ Contraintes :

- Tu dois créer une fonction par opération (addition, soustraction…).
- Ne jamais répéter le même code inutilement : utilise des fonctions.
- Bien gérer les erreurs si l'utilisateur entre des valeurs non numériques.

## Docs utilisée

- [Number.isNaN()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 
- [processus.exit(0)](https://www-geeksforgeeks-org.translate.goog/node-js/how-to-exit-process-in-node-js/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=rq)
- [reponse.trim()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [eval(`${num1} ${operation} ${num2}`)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)

## Erreur rencontrée
- Vérification que l'entrée donnée par l'utilisateur était bien un nombre. (30min recherche et solution)