// EXO IMC
// Créer une classe Imc qui a dans son constructor 3 variables  
// °nom 
// ° poids 
// ° taille 

// -Dans cette classe on a une fonction calculImc() qui calcule et retourne l’ imc. 

// -on a aussi une fonction display() qui affiche les infos dans la console du navigateur 
// Exemple de ce que ça affiche
// Sébastien Chabal (135 kg, 1.89 M) a un IMC de: 37.79

// -En dehors de cette classe on a une variable liste qui est un tableau contenant 2 nouvelles instances 
// (param au choix dans le constructor) de la classe Imc. 

// -Trouver un moyen de parcourir cette liste de manière à utiliser la fonction display sur chaque élément de la liste.


class Imc {
    constructor(nom,poids,taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
        this.imc = this.calculImc();
    }

    calculImc(){
        let imcCalc = poids/Math.pow(taille,2);
        console.log(imcCalc);
        
    }
    display(){
        console.log(calculImc());
    }
}

const list = [
        new Imc("Sébastien Chabal", 135, 1.89),
        new Imc("Escaladeuse Ultra Svelte", 45, 1.70),
        ];





