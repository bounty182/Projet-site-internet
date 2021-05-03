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


// class Imc {
//   constructor(nom, poids, taille){
//       this.nom = nom; //en IN MODE
//       this.poids = poids;
//       this.taille = taille;  
//       this.imc = this.calculImc();     //en OUT MODE 
//   } 
//   calculImc (){
//   let imc = (this.poids/Math.pow(this.taille,2)).toFixed(2); //toFixed => 2 chiffres apres la virgule
//   return imc;
//   }
//   display(){
//   console.log(`${this.nom},${this.taille}m pour ${this.poids}kg, a un IMC de ${this.imc}`);
//   }
// }

// const list = [
//   new Imc("Sébastien Chabal", 135, 1.89),
//   new Imc("Escaladeuse Ultra Svelte", 45, 1.70),
//   new Imc("Sumotori Arigato", 160, 1.90),
//   ];

// list.forEach(element => element.display());


// ## POO EXO
// gérer une pme

// ## CDC
// Un salarié = nom, prénom, age, salaire mensuel
// Il est payé sur N mois.
// En plus il y a XXX de charge

// Une pme = nom, une équipe de salariés
// Elle a des revenus dus à ses ventes R
// mais aussi:
// - des frais fixes FF (impots, ...)
// - des frais d'achat de matériel FA

// Faire le bilan annuel de l'entreprise

// ## TODO
// - créer une classe Pme & une classe Employee

// ## Détails
// - 3 salariés qui gagnent par mois: 2000, 3000, 4000
// - Revenues entreprise = 300000 
// - FraisFixes = 20000
// - FraisAchat = 50000
// - N = 12
// - taxesSalaire = 90%

// class Employe {
//   constructor(nom,prénom,age,salaireMensuel){
//     this.nom=nom;
//     this.prénom=prénom;
//     this.age=age;
//     this.salaireMensuel=salaireMensuel;
//     this.salaireAnnuel= this.calcSalaireAnnuel();
//     this.salaireAnnuelCharges = this.calculCharges();
//   }
//   calcSalaireAnnuel(){
//     let salaireAnnuel = this.salaireMensuel*12;
//     return salaireAnnuel;
//   }
//   calculCharges(){
//     return this.salaireAnnuel+(this.salaireAnnuel*0.9);
//   }
//   coutEmploye(){
//     return this.salaireAnnuelCharges;
//   }
//   display(){
//     console.log(`${this.nom} ${this.prénom}, a un salaire de ${this.salaireMensuel}€/mois, soit ${this.salaireAnnuel}€/an. Avec charges, l'entreprise depensera ${this.salaireAnnuelCharges}€/an.`);
//   }
// }

// class Pme {
//   constructor(nom,equipe,revenus,fraisFixes,fraisAchat){
//     this.nom=nom;
//     this.equipe=equipe;
//     this.revenus= revenus;
//     this.cout = fraisFixes+fraisAchat;
//     this.bilan = 0;
//   }
//   fraisTot(){
//     let cumul = 0;
//     console.log(`${this.nom} : Cout Initial : ${this.cout}`);

//      for (let element of this.equipe)                     //parcourir le tableau d'équipe = cout total de l'equipe
//            cumul += element.coutEmploye();

//     console.log(`${this.nom} : Cout Equipe : ${cumul}`);
 
//     this.cout += cumul;
//     console.log(`${this.nom} : VENTES : ${this.revenus}`);

//     this.bilan = this.revenus - this.cout;
//     console.log(`${this.nom} : BILAN : ${this.bilan}`);
//   }
// }

// const pme = new Pme (
//   "Ma Petite Entreprise - ", 
//   [new Employe ("Duval", "Paul", 30, 2000),
//    new Employe ("Durand", "Alain", 40, 3000),
//    new Employe ("Dubois", "Sylvia", 50, 4000),],
//    300000,
//    20000,
//    50000);
   
// pme.fraisTot();

// ## Exception+POO

// ## Enoncé
// gérer des comptes en banques

// ## Consignes
// - créer une classe CompteBancaire avec les méthodes de crédit,
//  de retrait et de visualisation de l'état du compte
// on doit pouvoir également faire un virement d'un membre à un autre
// - générer une exception sur le prélèvement interdit (qui dépasse le solde)

// ## Détails

// Faire un scénario avec gestion de 3 comptes crédités à 1000 chacun
//  (Alex, Clovis, Marco),
// puis Alex retire 100, puis Marco fait un virement de 300 à Clovis...
// Enfin Alex tente un retrait de 1200.
// Afficher tous les soldes finaux.
// Ces comptes sont placés dans un tableau associatif de clients. 
// les sorties sont dans la console

class CompteBancaire {
  constructor(nom){
    this.nom= nom;
    this.credit = 0;
  }
  Credit(montantCred){ 
    this.credit+=montantCred;              
    console.log(`Ajout de: ${montantCred}€ pour ${this.nom}.`);
    return this.credit;
  }
  retrait(montantRetrait){
    if(this.credit<montantRetrait){
    console.log(`retrait de ${montantRetrait}€ refusé, t'as plus une thune mec.`)
    }else{
    console.log(`${this.nom} à retiré ${montantRetrait}€`);
    return this.credit -= montantRetrait;
    }
  }
  creditDisplay(){
    console.log(`${this.nom}, il te reste ${this.credit}€.`);
  }
  virement(montant,compte){
    if(this.credit<montant){
      console.log(`virement de ${montant}€ refusé, t'as plus une thune mec.`);
    }else{
      compte.Credit(montant);
      console.log(`${this.nom} à fait un virement de ${montant}€ à ${compte.nom}.`);
      this.credit -= montant;
    }
  }
}

const lesComptes = {
  "Alex" : new CompteBancaire("Alex"),
  "Clovis" : new CompteBancaire("Clovis"),
  "Marco" : new CompteBancaire("Marco"),
}

console.log(lesComptes);

for (let element in lesComptes){
      lesComptes[element].Credit(1000);
}

lesComptes["Alex"].creditDisplay();

lesComptes["Marco"].virement(300, lesComptes["Clovis"]);

for (let element in lesComptes){
      lesComptes[element].creditDisplay();
}













