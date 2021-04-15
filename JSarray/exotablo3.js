//  Faire la somme de tous les éléments d'un tableau.

let tab = [455,554,4,5,8,7,6,9,45,15,458,785,45,2,14];
let tabTest = [10,10,10,10,10,4,10,10];
let tabPalindrome = [1,2,3,4,5,4,3,2,1];

// for(let i=0 ; i<tabTest.length ; i++){
//     somme = tabTest[i] + somme;
// }
// console.log(somme);

// Une fonction qui retourne la somme de tous les éléments d'un tableau.

// function sommeTotale(tab){
//     for(let i=0 ; i<tab.length ; i++){
//         somme = tab[i] + somme;
//     }
//     return somme;
// }

// console.log(sommeTotale(tabTest));

// Faire la moyenne des élements d'un tableau.

// let somme = 0;

// for(let i=0 ; i<tabTest.length; i++){
//     somme = (tabTest[i] + somme);
// }
// let moyenne = somme/tabTest.length;
// console.log(moyenne);

// Pareil dans une fonction.

// function moyenneTotale (tab){
//     let somme = 0;
//     for(let i=0 ; i<tabTest.length; i++){
//         somme = (tabTest[i] + somme);
//     }
//     moyenne = somme/tabTest.length;
//     return moyenne
// }
// console.log(moyenneTotale(tabTest));

// // Compter le nombre d'éléments pairs d'un tableau.

// let count = 0;

// for(let i=0 ; i<tabTest.length ; i++){
//     if(tabTest[i]%2 == 0){
//         count++;
//     }
// }
// console.log(count);


// Fonction

function pairCount(tab){
    let count = 0;
    for(let i=0 ; i<tabTest.length ; i++){
        if(tabTest[i]%2 == 0){
            count++;
        }
    }
    return count;
}

console.log(pairCount(tabTest));

//Chercher le plus petit nombre positif (>= 0) d'un tableau.

let petitNb = 0;

for(let i=0 ; i<tab.length ; i++){
    if(tab[i]>= 0 && tab[i]<tab[i+1]){
        petitNb = tab[i];
    }
}

console.log(petitNb);


function lePlusPetit(tab){
    for(let i=0 ; i<tab.length ; i++){
        if(tab[i]>= 0 && tab[i]<tab[i+1]){
            petitNb = tab[i];
        }
    }
    return petitNb;
}

console.log(lePlusPetit(tabTest));

//Est-ce qu'un tableau donné est un palindrome ? (Il se lit de la même façon de gauche à droite que de droite à gauche)


function isPalindrome(x) {
    for(let i=1 ; i<x.length ; i++){
        if (x[i-1] != x[x.length-i]){
            return false;
        }
     }
    return true;
}
console.log(isPalindrome(tabPalindrome));

/*correction Rémi 

function palin(tab){
    let decroiss = [];
    for(let i=tab.length; i>=0;i--){
        if(tab[i]>=0){
            decroiss.push(tab[i]);
        }
    }
    for(let y = 0; y < tab.length; y++){
        if(tab[y] != decroiss[y]){
            return "It's not palindrome";
        }
    }
    return "OK ;)";
}

console.log(palin(tab3));

*/