

// let nom = "Dupond";
// let prenom = "Jean";
// let initiales = nom[0] + prenom[0];

// let phrase = [nom,prenom,initiales];  // faisable avec 3 push

// // phrase.push(nom,prenom,initiales);

// console.log(phrase);



// let note1 = 20;
// let note2 = 40;

// function moyenne(a,b){
//     return (note1+note2)/2;
// }

// let moyene = moyenne(note1+note2);

// console.log(moyenne(note1,note2));

// console.log(moyene);



// let noteFrancais = 9;
// let noteMaths = 10;
// let notePhilo = 10;
// let moyenneTotale = (noteFrancais+noteMaths+notePhilo)/3;

// function moyenne(a){  
//     if(a >= 15){
//         return "Tres Bien";
//     }
//     else if(a == 10){
//         return "Assez bien";
//     }
//     else {
//         return "Refus";
//     }
// }


// // console.log(moyenne(moyenneTotale));

// voiture = {"nbChevaux":500, "vitesseMax":450,"defauts":["adherence","acceleration"] };

// console.log(voiture.vitesseMax);

// voiture.marque = "BMW";
// delete voiture.marque;

// console.log(voiture.marque);

// console.log(voiture);

// console.log(voiture.hasOwnProperty("vitesseMax")); //renvoie true or false selon sur l'objet voiture contient la variable "vitesseMax"  


// var voiture = {"nbChevaux": 500,"vitesseMax": 450,"faiblesse": ["accélération","adhérence"]};

// voiture.pilotes = {"pilote":"bibou","copilote":"boubi"};


// console.log(voiture.pilotes.copilote);

// i=0;
// dessin = [];

// while(i<10){
//     i++;
//     dessin.push("#");
//     console.log(dessin);
// }

// for(let i=0 ; i<10 ; i++){
//     dessin.push("#");
//     console.log(dessin);
// }

// let tab = [10,20,10,20,10,20];

// function moyenne(tab){
//     let moyenneTotale = 0;
//     for(let i=0 ; i<tab.length ; i++){
//         moyenneTotale += tab[i];
//     }
//     return moyenneTotale/tab.length;
// }
// console.log(moyenne(tab));

// function plus(tab){                                     A refaire
//     for(let i=0 ; i<tab.length ; i++){
//         for(let j=0 ; j<tab[i].length ; j++){ 
//             tab[i][j] += 1;          
//         }
//     }
//     return tab;
// }

// console.log(plus([[10,10],[2,2],[3,3]]));

// let tab = [1,2,3,4,5];

// let ajouterUn = tab.map(function(nombre){
//     return nombre +1;
// })

// console.log(tab);
// console.log(ajouterUn);

const tab = [1,2,3,4,5];

const plus = tab.map(() => 5);
const maFonction = () => console.log("slt");

maFonction();

const disNom = (nom = "Aucun") => console.log(nom); // donne une valeur par défaut a la fonction si les parametes ne sont pas remplis

disNom();
disNom("SoSo");

const voiture = {marque: "Toyota", 
                //model:"GT",
                vitesse:300};

// const {marque, model, vitesse}=voiture;
// console.log(marque,model,vitesse);

// const {marque, model: prix, vitesse}=voiture;
// console.log(marque, prix, vitesse);

const {marque, model = "luxe", vitesse}=voiture;
console.log(marque, model, vitesse);










