const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('\nCalculatrice créée par Léooo\n');
    console.log('Veuillez choisir votre opération (1-4):');
    console.log('  1. ➕  Addition');
    console.log('  2. ➖  Soustraction');
    console.log('  3. ✖️  Multiplication');
    console.log('  4. ➗  Division\n');

    rl.question('Votre choix (1-4) : ', function(operation) {
        switch (operation) {
            case '1':
                operation = '+';
                break;
            case '2':
                operation = '-';
                break;
            case '3':
                operation = '*';
                break;
            case '4':
                operation = '/';
                break;
            default:
                console.log('\n❌ Opération invalide, veuillez choisir le chiffre correspondant à l\'opération\n');
                return menu();
        }
        calcul(operation);
    }); 
}

function demanderNombre(chiffrenum, num) {
    rl.question(`Entrez le ${chiffrenum} nombre: `, function(reponse) {
        if (isNaN(reponse) || reponse.trim() === '') {
            console.log("❌ ERREUR - Veuillez entrer un nombre valide.");
            return demanderNombre(chiffrenum, num);
        } else {
            num(reponse);
        }
    });
}

function calcul(operation) {
    demanderNombre('premier', function(num1) {
        demanderNombre('deuxième', function(num2) {
            const result = eval(`${num1} ${operation} ${num2}`); 
            console.log(`Le résultat de ${num1} ${operation} ${num2} est ${result}\n`);
            continuer(menu);
        });
    });
}


function continuer(menu) {
    rl.question('Voulez-vous continuer ? (o/n) : ', function(continuer) {
    if (continuer == 'o' || continuer == 'O') {
        menu();
    } else {
        process.exit(0);
    }
    });
}

menu();

