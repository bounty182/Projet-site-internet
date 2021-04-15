let tab = [14,15,16,17,17,20,22,21];
let tab1 = [24,15,16,24,8,20,24,100];
let tab2 = [24,15,16,17,1000,990,90,100];

/*
// Afficher tous les éléments pairs du tableau tab.

 for(let i=0 ; i<tab.length ; i++){
    if(tab[i]%2 == 0){
        console.log(tab[i]);
   }
}
 Afficher tous les éléments du tableau tab qui sont dans des cases de numéro pair.

/*

for(let i=0 ; i<tab.length ; i++){
    if(i%2 == 0){
        console.log(tab[i]);
    }
}






// Fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

function tabloLast(tab){
        console.log(tab[tab.length-1]);
        
}
tabloLast(tab);


//Fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

*/

function tabloMin(tab){
    let min = tab[0];
    for(let i=1 ; i<tab.length ; i++){
        if (tab[i] < min){
            min = tab[i];
        }
    }
    return min;
}

console.log(tabloMin(tab));
console.log(tabloMin(tab1));




//Fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.


function tabloMax(tab){
    let max = tab[0];
    for(let i=1 ; i<tab.length ; i++){
        if (tab[i] > max){
            max = tab[i];
        }
    }
    return max;
}

console.log(tabloMax(tab));
console.log(tabloMax(tab1));



//++ Fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.


function secondBiggest(tab) {
    let max1 = 0;
    let max2 = 0;
    for(let i = 0 ; i < tab.length ; i++) {
        if(tab[i] > max1) {
            max2 = max1;
            max1 = tab[i];
        } else if(tab[i] > max2) {
            max2 = tab[i];
        }
    }
    return max2;
}


console.log(secondBiggest(tab));

// Fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

function count(tab,x){
    let nbFois = 0;
    for(let i=0 ; i<tab.length ; i++){
        if(x == tab[i]){
            nbFois++;
        }
    }
    return nbFois;
}

console.log(count(tab1,24));

// Fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function boulean(tab,x){
    for(let i=0 ; i<tab.length ; i++){
        if(tab[i] == x){
            return true;           
        }
    }
    return false;
}

console.log(boulean(tab1,24));

// Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). 
// est-ce que num est entre i1 et i2 ?

function dichotomie ( tab, num, i1, i2){
    if(i2<i1){
        return false;
    }
    let middle = (i1+i2)/2;
    if(tab[middle] == num){
        return true;
    }else if (tab[middle] < num) {
        return dichotomie(tab, num, middle+1, i2);
    }else {
        return dichotomie(tab, num, i1, middle-1);
    }
}

console.log(dichotomie(tab, 1, 1, 6));

function search(num, tab){
    // utilise la fonction dichotomie pour trouver le résutlat.
    return dichotomie(tab, num, 0, tab.length-1);
}

//Comment exploiter cette information pour améliorer la recherche d'un élément ?

function hanoi(nbDisques,x,y,z){
    if(nbDisques === 1){
        console.log("Déplacer de "+x+" vers "+z);
    }else{
        hanoi(nbDisques-1,x,z,y);
        console.log("Déplacer de "+x+" vers "+z);
        hanoi(nbDisques-1,y,x,z);
    }
    
}

hanoi(3,"un","deux","trois");

/* tableau de 15 cases

je cherche le nombre 80

Je cherche entre 0 et 14
Je trouve le millieu du tableau donc la case [7]

je trouve 65 => trop petit

Je cherche entre 7 et 14
je trouve le millieu de 7 et 14 donc la case [10 ou 11]

je trouve 200 ou 777 => trop grand

je cherche au millieu de de l'écart entre 7 et [10] ( ou [11])

je trouve la case [8] => 77 => trop petit

80 se trouve sur la case [9] ou n'existe pas

case [9] => 100

donc 80 n'existe pas dans le tableau */
