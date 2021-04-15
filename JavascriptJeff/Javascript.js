let prenom = "Gisolle";
let age = 30;
space = " ";
let welcome ="\""+"Bonjour "+ prenom + space + "tu as "+ age + space + "ans aujourd'hui, c'est la fiesta !\"";

console.log(welcome);

console.log(prenom.length);// longueur de la chaine de caracteres de la variable "prenom"
console.log(prenom[3]);    // 4eme lettre de la variable "prenom" (demarre a 0 comme les tableaux)
console.log(prenom[prenom.length -1]); // affiche la derniere lettre de la variable prenom

let passions = ["boxe", "fleurs"];
let array = [prenom, age, passions]; // pas de restrictions sur le type de données que l'on peut ajouter

console.log(array);

console.log(array[2][1]);

array [2] [0] = "football";  // modification du tableau a la volée de "boxe" par "football"

console.log(array[2][0]); 
console.log(array);