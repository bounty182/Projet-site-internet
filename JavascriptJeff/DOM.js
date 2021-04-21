
//  document.body.insertBefore(txt[0], titre);


//  Sur le document.body  on va utiliser la fonction appendChild() 

//  de manière à inverser le texte et le titre

//  document.body.appendChild(titre);

//  EXO DOM 2.3  :

//  Sur le document.body  on va utiliser la fonction removeChild() 

//  de manière à supprimer le titre
//  on console log le body du document

//  document.body.removeChild(titre);
//  console.log(document.body);



//  let newTxt = document.createTextNode("Salut c'est cool");

//  document.body.appendChild(newTxt);

//  document.body.insertBefore(newTxt, txt[0]);

//  console.log(document.body);

//  document.body.replaceChild(newTxt, txt[0]);

//  console.log(document.body);


//  function ajoutTexte(pseudo,txt){
//      let newTxt = document.createElement("p");
//      newTxt.innerHTML = `<b>${pseudo}</b> ${txt}`;
//      document.body.appendChild(newTxt);
//  }
//  ajoutTexte("JOSé", "AZERTYUIOP");
//  ajoutTexte("COCO", "Wejdene");
//  ajoutTexte("eiffel65", "Blue Dabeudi dabeuda");
//  ajoutTexte("Cristaline", "eau de source");
//  ajoutTexte("EPSON", "Rétro Projecteur");


//  console.log(document.body);

//  EXO DOM 4 : récupérer et modifier les attributs html

//  Sur notre page on va avoir : 
//  1 titre avec un id 
//  1 lien avec un attribut href qui redirige vers "#" 

//  Côté JS : 

//  sur le lien on va utiliser setAttribute de manière à modifier l'attribut href pour qu'il redirige vers www.super.com

//  grâce à la fonction getAttribute() on veut afficher en console l'attribut href du lien et l'attribut id du titre

// const lien = document.body.getElementsByTagName("a")[0]; // l'indice 0 permet de cibler directement le premier lien de la page
// const titre = document.getElementById("titre");
// const txt = document.body.getElementsByTagName("p");

// // lien.setAttribute("href","https://www.super.com"); // attribut href ciblé ici avec la valeur "https://www.super.com"

// console.log(lien.getAttribute("href"));
// console.log(titre.getAttribute("id"));


// // Côté HTML : sur notre page on va rajouter plusieurs paragraphes

//  Côté JS 
//   On a toujours notre variable titre qui récup le titre
//   On a toujours notre variable txt qui récup tous les paragraphes de la pages (getElementsByTagName)
//  On va créer une variable texteTab dans laquelle on va stocker tous les paragraphes transformés en tableau 
//  (allez voir Array.from () )

// const texteTab = Array.from(txt);

//  Ensuite sur texteTab on va utiliser la fonction map pour modifier le innerHTML de txt en "LOL on t'as HACKED !"

// texteTab.map( hack => hack.innerHTML = `LOL on t'as HACKED !`);

// EXO DOM 5 : trouver la taille des éléments : 

// HTML : 
// on a tjrs notre titre etc ...

// JS :
// En console on veut afficher le offsetHeight, le offsetWidth et le clientWidth du titre

// console.log(titre.offsetHeight);
// console.log(titre.offsetWidth);
// console.log(titre.clientHeight);
// console.log(titre.clientWidth);


// EXO DOM 6 : modififer le style d'1 élément

// JS : (se renseigner sur la propriété style)
// Sur notre titre on va accèder à sa propriété style, 
// - On veut modifier la couleur du titre en rouge,
// - On veut modifier la police du titre en impact 
// - On veut mettre  sur le titre  un box shadow de 2px sur 2 px avec un rayonnement de 20 px et de couleur verte

// titre.style.color = "red";
// titre.style.fontFamily = 'impact';
// titre.style.boxShadow = "2px 2px 20px green";
// titre.style.borderRadius = "40px";

// texteTab.map( hack => hack.style.color = "blue");

// const paragraphe = document.querySelectorAll("p");


// EXO DOM 7 : classList 
// HTML : 
// on a 1 titre et 3 liens 
// 1 lien "ajouter"
// 1 lien "Suppr"
// 1 lien "ON / OFF"

// CSS : 
// on a 1 classe maCouleur dans laquelle on modifie la color en violet 

// JS : go se renseigner sur addEventListener("click")
// et go se renseigner sur classList.add remove toggle 

// On récupère le titre  via un querySelector
// On récupère les liens  via un querySelectorAll

// Sur le 1er lien on va placer un addEventListener qui réagit au "click" et qui lance une fonction
// Dans cette fonction, sur notre titre on va utiliser classList.add() pour lui ajouter notre classe css : maCouleur

// Sur le 2e lien on va placer un addEventListener qui réagit au "click" et qui lance une fonction
// Dans cette fonction, sur notre titre on va utiliser classList.remove() pour lui supprimer notre classe css : maCouleur

// Sur le 1er lien on va placer un addEventListener qui réagit au "click" et qui lance une fonction
// Dans cette fonction, sur notre titre on va utiliser classList.toggle() pour lui activer / désactiver notre classe css : maCouleur

// const titreQ = document.querySelector("#titre");
// const liensClick = document.querySelectorAll("a");

// liensClick[0].addEventListener("click", function() { 
//     titreQ.classList.add("maCouleur");
// });

// liensClick[1].addEventListener("click", function() { 
//     titreQ.classList.remove("maCouleur");
// });

// liensClick[2].addEventListener("click", function() { 
//     titreQ.classList.toggle("maCouleur");
// });

// EXO DOM 8 : Système d'ancre en JS (scrollTo)

// JS : 
// On stock tous les titres dans une variable titres via un querySelectorAll 

// On crée 1 fonction goTitre qui prend une variable titre en paramètre

// dans cette fonction, dans une variable dist, on stock le offSetTop du titre

// Ensuite sur window on veut utiliser la fonction scrollTo pour scroller jusqu'à dist

// En dehors de la fonction on appel la fonction 
// goTitre(titres[3]) par exemple 

// Warning : possible bug avec live server sinon faire 
// goTitre(titres[3]) ,direct dans la console du navigateur

// const allTitle = document.querySelectorAll("#titre");

// console.log(allTitle);

//  function goTitre(titre){
//     let dist = titre.offsetTop;
//     window.scrollTo(0,dist);
//  }

// EXO DOM 9 : Surveillage du clavier

// Sur notre page on va placer un addEventListener qui écoute keypress et qui 
// lance 1 fonction qui a une variable event en param 

// dans cette fonction on va console log event

// function evenement(event){
//     console.log(event.key);
// }

// window.addEventListener("keypress", evenement);

// EXO DOM 10 : Mouseout 

// HTML : juste un titre h1 

// CSS : le display du h1 doit être à none 

// JS : 
// Dans une variable on récupère le titre 
// Sur toute notre page on va placer un addEventListener qui écoute mouseout et qui lance une fonction 

// dans cette fonction on modifie le display du titre pour le mettre à block

// const titreQ = document.querySelector("#titre");

// function display(){
//     titreQ.style.display = "block";
// }

// addEventListener("mouseout", display);

// EXO DOM 11 Désactiver  Button 

// HTML : dans un formulaire on a un textarea et un Button 

// JS : 

// On récupère dans une variable txt notre textarea

// On récupère dans une variable btn notre button

// Sur txt on va placer un addEventListener qui va surveiller le clavier et lancer une fonction,

// Dans cette fonction il faut trouver un moyen de désactiver le btn si la longueur de la valeur de txt dépasse 5

// const txt = document.querySelector("#placeholder");
// const btn = document.querySelector("button");

// txt.addEventListener("keyup", function() {
//     btn.disabled = txt.value.length >= 5 ? true : false;
//     });