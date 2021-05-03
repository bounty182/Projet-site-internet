// function calculSuite(n,m){
//     rMin= (n/2*(n+1));
//     rMax= m/2*(m+1);
//     return (rMax-rMin)+n;
// }

// console.log(calculSuite(175,326));


// let chaine = ""; 
// let txtFinal = chaine.split(" ").splice(-70);
// console.log(txtFinal.join(" "));

// function suite(m){
//     let result3 =0;
//     let rMax = 0;
//     for(let i=3; i<=m; i+=3) {
//         result3 += i;
//     };
//     rMax= m/2*(m+1);

//     return rMax-result3;
// }
// console.log(suite(869));



// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiouy'.includes(letter)).length;

// console.log(countVowels('')); 


// impair impair = noir
// pair pair = noir
// pair impair = blanc
// impair pair = blanc

// let chaine = ""; 
// let txtFinal = chaine.split(",");

// function suiteNulle(n){
//     for(let i = n ; i<txtFinal.length; i++){
//         if ( i != txtFinal[i]){
//             console.log(i);
//         }
//     }
// }

// suiteNulle(0);

// let chaine = ""; 
// let txtFinal = chaine.split(" ");


suite = "3,0,7,3,8,0,0,0,3,1,2,4,1,5,2,2,8,1,2,7,1,4,6,8,2,2,7,5,1,1,6,4,9,1,4,9,8,0,3,6,3,7,9,6,5,1,0,7,4,9,8,4,9,5,7,8,6,3,9,2,6,2,1,6,0,7,7,3,6,6,7,0,4,8,2,3,8,2,4,0,6,8,2,0,7,8,2,5,9,0,9,0,2,4,8,8,7,5,6,3,5,1,7,6,1,0,2,0,5,4,8,6,8,3,7,6,9,7,1,7,8,8,3,9,1,1,0,4,6,2,6,7,6,3,0,3,9,0,3,4,0,3,6,6,1,4,6,4,3,1,9,5,9,5,4,4,3,8,5,9,0,8,8,2,0,5,6,8,3,9,3,8,5,0,6,0,4,3,1,9,2,7,8,0,8,1,6,4,3,5,8,2,7,0,4,9,9,5,3,1,5,6,0,9,1,0,1,2,4,5,4,0,0,8,4,0,1,1,0,3,1,8,1,7,6,7,2,8,3,8,6,4";
let tabSuite = suite.split(",");

console.log(tabSuite);

for(let i=0 ; i<tabSuite.length; i++){
    tabSuite[i]*=2;
}

console.log(tabSuite.join());


// suite = "90,56,109,42,150,161,93,6,133,119,89,57,2,172,184,110,69,179,75,109,118,102,130,11,41,122,62,72,8,79,45,41,77,193,66,41,62,61,81,147,165,89,106,176,49,111,167,4,160,5,18,172,17,66,150,84,183,41,86,83,17,186,82,120,60,134,33,83,63,119,16,53,44,161,53,101,90,106,12,1,188,199,12,4,131,100,183,12,71,2,165,84,21,106,63,95,50,109,140,88,42,7,26,193,110,54,174,112,188,20,197,153,59,95,134,169,47,81,80,198,150,24,128,120,19,59,183,60,43,99,45,45,183,32,7,148,65,193,180,53,123,189,94,79,107,108,186,145,27,170,53,143,182,151,50,45,11,109,145,36,189,85,190,157,141,61,151,11,173,20,89,77,176,94,182,188,63,185,21,2,2,35,88,151,134,37,135,30,142,150,55,130,186,104,3,2,157,99,174,43,29,84";


// function boulébil(n){
//     let suite = "";
//     let tabSuite = suite.split(",");
//     let tabFin = [];
//     for(let i=0 ; i<tabSuite.length; i++){
//         if(tabSuite[i].length == n) {
//             tabFin.push(tabSuite[i]);
//         }
//     }
//     console.log(tabFin.join());
// }

// boulébil(3);


// function horloge(s){
//     h = Math.floor(s/3600);
//     m = Math.floor((s%3600)/60);
//     s= ?
    

//     console.log(`${h}:${m}:${s}`);
// }
// horloge(28073);

// function escargot(hauteurPuit,jour,nuit){
//     let count = 0;
//     for(let i=0 ; i<hauteurPuit ; ){
//         count++;
//         i+=jour;
//         if(i<hauteurPuit){
//             i-=nuit;
//         }else{
//             break
//         }

//     }
//     return(count);
// }


// function count(string) {
//   let string1 = string.split("").sort().join("");
//   let counter = 1;
//   for (let i = 0; i < string.length; i++) {
//     if (string1[i] == string1[i + 1]) {
//       counter++;
//     } else {
//       console.log(string1[i] + " " + counter);
//       counter = 1;
//     }
//   }
// }
// count("");

// let string = "3 de trèfle, 3 de pique, 4 de carreau, Valet de pique, 9 de pique, Roi de carreau, 2 de carreau, Dame de trèfle, 6 de carreau, 4 de trèfle, Dame de pique, 2 de pique, Dame de carreau, 10 de carreau, As de coeur, 7 de trèfle, 7 de pique, 5 de pique, 5 de trèfle, 8 de carreau, As de pique, Dame de coeur, 7 de coeur, 6 de trèfle, 8 de coeur, 10 de pique, 5 de coeur, 2 de coeur, 2 de trèfle, 3 de coeur, Roi de trèfle, As de trèfle, 8 de trèfle, 8 de pique, 3 de carreau, Valet de carreau, 10 de trèfle, 10 de coeur, 4 de coeur, 7 de carreau, 6 de coeur, 5 de carreau, 6 de pique, Valet de trèfle, Valet de coeur, 4 de pique, As de carreau, 9 de trèfle, Roi de pique, Roi de coeur, 9 de carreau,";
// let tab = string.split(" ");
// tab.sort();
// tab.splice(76,51);

// console.log(tab);


//   for (let i = 0; i < string.length; i++) {
//     if (tab[i] == string[i + 1]) {
//       counter++;
//     } else {
//       console.log(tab[i]);
//       counter = 1;
//     }
//   }

// function escargot(hauteurPuit,jour,nuit){
//     let count = 0;
//     for(let i=0 ; i<hauteurPuit ; ){
//         count++;
//         i+=jour;
//         if(i<hauteurPuit){
//             i-=nuit;
//         }else{
//             break
//         }

//     }
//     return(count%7);
// }

// console.log(escargot(576,5,2));