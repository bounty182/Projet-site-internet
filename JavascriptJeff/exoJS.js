/* On a 2 variables , 
maCarte initialisé avec le pokemon de votre choix
et
taCarte initialisé avec un autre pokemon de votre choix

on va procéder à un échange de carte 

à la fin on console log (maCarte et taCarte) pour vérifier */

let maCarte = "Salameche";
let taCarte = "Carapuce";

// console.log(maCarte);
// console.log(taCarte);

// let temp = maCarte;
// let maCarte = "Carapuce";
// let taCarte = temp;

// console.log(maCarte);
// console.log(taCarte);

[maCarte, taCarte] = [taCarte, maCarte];

console.log(maCarte,taCarte);







