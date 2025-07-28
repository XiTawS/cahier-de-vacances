const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('\nVeuillez choisir le niveau de difficulté (1-4):');
    console.log('  1. 🟢  Niveau facile (1 à 50)');
    console.log('  2. 🟡  Niveau moyen (1 à 100)');
    console.log('  3. 🔴  Niveau difficile (1 à 500)');
    console.log('  4. ❌  Quitter le jeu\n');

    rl.question('Votre choix (1-4) : ', function(reponse_menu) {
        switch (reponse_menu) {
            case '1':
                reponse_menu = 'facile';
                break;
            case '2':
                reponse_menu = 'moyen';
                break;
            case '3':
                reponse_menu = 'difficile';
                break;
            case '4':
                reponse_menu = 'quitter';
                break;
            default:
                console.log('\n❌ Opération invalide, veuillez choisir le chiffre correspondant au niveau de difficulté\n');
                return menu();
        }
        if (reponse_menu === 'quitter') {
            console.log('Merci d\'avoir joué !');
            rl.close();
        } else {
            jouer(reponse_menu);
        }
    }); 
}

function jouer(reponse_menu) {
    console.log('\nVous avez choisi le niveau ' + reponse_menu);
    if (reponse_menu === 'facile') {
        nombre_mystere = Math.floor(Math.random() * 50) + 1;
        console.log('Le nombre mystère est compris entre 1 et 50');
        demanderNombre(nombre_mystere, 0, reponse_menu);

    } else if (reponse_menu === 'moyen') {
        nombre_mystere = Math.floor(Math.random() * 100) + 1;
        console.log('Le nombre mystère est compris entre 1 et 100');
        demanderNombre(nombre_mystere, 0, reponse_menu);
        
    } else if (reponse_menu === 'difficile') {
        nombre_mystere = Math.floor(Math.random() * 500) + 1;
        console.log('Le nombre mystère est compris entre 1 et 500');
        demanderNombre(nombre_mystere, 0, reponse_menu);
    }
}

function demanderNombre(nombre_mystere, tentatives, reponse_menu) {
    rl.question('Entrez un nombre : ', function(reponse) {
        const reponse_nombre = parseInt(reponse);
        if (isNaN(reponse_nombre)) {
            console.log("❌ Veuillez entrer un nombre valide.");
            return demanderNombre(nombre_mystere, tentatives, reponse_menu);
        }
        if (reponse_nombre === nombre_mystere) {
            console.log('🎉 Bravo ! Vous avez trouvé le nombre mystère !');
            console.log('Vous avez trouvé le nombre mystère en ' + tentatives + ' tentatives !');
            historique(nombre_mystere, tentatives, reponse_menu);
            rejouer();
        } else if (reponse_nombre < nombre_mystere) {
            console.log('➕ C\'est plus !');
            tentatives+=1;
            demanderNombre(nombre_mystere, tentatives, reponse_menu);
        } else {
            console.log('➖ C\'est moins !');
            tentatives+=1;
            demanderNombre(nombre_mystere, tentatives, reponse_menu);
        }
    });
}

function rejouer() {
    rl.question('Voulez-vous rejouer ? (o/n) : ', function(reponse_rejouer) {
        if (reponse_rejouer === 'o') {
            menu();
        } else if (reponse_rejouer === 'n') {
            console.log('Merci d\'avoir joué !');
            rl.close();
        } else {
            console.log('❌ Veuillez entrer une réponse valide.');
            rejouer();
        }
    });
}

function historique(nombre_mystere, tentatives, reponse_menu) {

    let historique = [];
    try {
        if (fs.existsSync('historique.json')) {
            const data = fs.readFileSync('historique.json', 'utf8');
            historique = JSON.parse(data);
        }
    } catch (err) {
        console.log('Création d\'un nouvel historique...');
        historique = [];
    }
    
    historique.push({ 
        niveau: reponse_menu, 
        nombre_mystere: nombre_mystere, 
        tentatives: tentatives, 
        date: new Date().toLocaleDateString('fr-FR'), 
        heure: new Date().toLocaleTimeString('fr-FR')
    });
    

    try {
        fs.writeFileSync('historique.json', JSON.stringify(historique, null, 2));
        console.log('✅ Historique enregistré avec succès !');
    } catch (err) {
        console.error('❌ Erreur lors de l\'enregistrement de l\'historique :', err);
    }
}

console.log('\nJeu du nombre mystère créé par Léooo');
menu();