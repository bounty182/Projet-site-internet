// HTML : sur notre page on a 1 input 

// JS : 
// On récupère cet input dans une variable leInput,

// Sur leInput on va placer un addEventListener qui écoute l'évènement focus et qui lance une fonction 
// Dans cette fonction on va modfier le backGround Color de leInput en (couleur au choix)

// Sur leInput on va placer un addEventListener qui écoute l'évènement blur et qui lance une fonction 
// Dans cette fonction on va modfier le backGround Color de leInput en white


// const leImput = document.querySelector("input");

// leImput.addEventListener("focus",(event) => {  // agit quand on focus un element
//     leImput.style.background = "red";
// });

// leImput.addEventListener("blur",(event) => {    // agit quand on ne focus plus l'element
//     leImput.style.background = "";
// });


// EXO DOM13 Load : 

// HTML : 
// Une dizaine d'images de grande taille

// JS : 
// Dans une const images, on récupère TOUTES les img
// Une const tabImg va stocker ces images transformées en tableau (Array.from)

// Sur tabImg on va utiliser la fonction map()

// Dans les paramètres de map on va lui passer une fonction fléchées 
// Cette fonction fléchées elle a 2 paramètres, une variable image et i 

// Dans cette fonction fléchée, sur image on va placer un addEventListener qui écoute "load" et qui lance une fonction

// dans cette fonction on va faire un console log de i pour afficher le numéro de l'image

// const leImg = document.querySelectorAll("img");
// const tabImg = Array.from(leImg);

// tabImg.map( (leImg, i) => leImg.addEventListener("load",function(){
//     console.log(i);
// }));




// EXO DOM 14 Barre de scroll pt1

// EXO DOM SUPER SCROLL CSS : 
// -un body avec une min-height de 5000px (on veut pouvoir scroller) 
// - Une classe boxbar qui a une width à 100%, une position fixée en top à 0 et en left à 0, une bordure (couleur au choix) 
// - Une classe bar qui a une hauteur de 20px et une width à 0, un background (même couleur au choix). 

// HTML : ma div class boxbar contient ma div class bar

// JS : 
// On va stocker notre élément avec la classe bar dans une variable bar

// Sur toute notre page on place un addEventListener qui écoute le scroll et qui lance une fonction : 

// Dans cette fonction, on veut afficher en console : 
// La hauteur de la page avec document.body.scrollHeight
// La hauteur de l’affichage avec innerHeight
// La position du scroll avec pageYOffset

// const bar = document.querySelector(".bar");

// addEventListener("scroll",function(){
//     console.log(document.body.scrollHeight);
//     console.log(innerHeight);
//     console.log(pageYOffset);
// });

// EXO DOM 14 Barre de scroll pt2 : 

// JS : 
// -On va stocker notre élément avec la classe bar dans une variable bar

// -Sur toute notre page on place un addEventListener qui écoute le scroll et qui lance une fonction : 

// -Dans cette fonction on a une variable scrollMax qui stock le scrollHeigh du body du document moins innerHeight

// -On a une variable onEstOu qui va stocker un POURCENTAGE de pageYOffset / scrollMax

// -Ensuite on va modifier dans le style de bar, sa width pour lui assigner onEstOu concaténé avec “%“

// addEventListener("scroll",function(){
//     let scrollMax = document.body.scrollHeight - innerHeight;
//     let onEstOu = (pageYOffset/scrollMax)*100;
//     bar.style.width = onEstOu+"%";
// });

// EXO DOM SetTimeout
//  HTML : Juste une balise de titre à vide 

// CSS : une transition de 1sec sur tout, 
// le h1 avec une opacity à 0 

// JS : 
// °Récupérer le titre dans une variable 
// ° Créer une variable txt, à laquelle on assigne un setTimeout qui prend en 

// -1er paramètre une fonction dans laquelle on modifie le texte du titre (voir textContent), 
// qui remet l'opacity à 1, 
// qui modifie la couleur du background de la page
 
// - en 2e paramètre : 2000 (ms)



// let txt = setTimeout(function(){
//     title.textContent = "SALUT C'EST COOL";
//     title.style.opacity = 1;
//     title.style.color = "teal";
//     title.style.fontFamily = "Verdana, Geneva, sans-serif";
//     title.style.textAlign = textAlign = "center";
//     document.body.style.background = "purple";
// }, 2000);



// EXO DOM SetInterval

// HTML : un titre qui lance le départ « C’est parti allons y »

// CSS: le titre a un cursor à pointer (pour indiquer au user qu’on peut cliquer)

// JS : 
// 1 variable titre qui stock notre h1
// 1 variable timer initialisée à 3 
// 1 addEventListener sur le titre écoute le click et lance une fonction dans laquelle on a : 
// -1 variable countDown à laquelle on assigne un setInterval qui lance une fonction toute les 2 sec, 
// - dans cette fonction : 

// Si le timer est suppérieur à 0 alors on assigne au textContent du titre le timer

// Sinon on assigne au textContent du titre  "GO GO GO" et on fait un clearInterval de countDown

// En dehors du else on console log le timer et on décrémente le timer

// let title = document.querySelector("h1");

// title.addEventListener("click",function(){
//     let timer = 3;
//     let countDown = setInterval(function(){
//         if(timer>0){
//             title.textContent = timer;
//         }else{
//             title.textContent = "GO GO GO";
//             clearInterval(countDown);
//         }
//         console.log(timer);
//         timer--;
//     },1000);
// });

// EXO DOM image Click 
// HTML : rien dans le body 
// JS : 
// -Un addEventListener sur toute la page qui écoute le click et qui lance une fonction qui a une variable unEvent en paramètre 

// -Dans cette fonction on console log unEvent.
// -explorer ce que renvoi le console log pour trouver les coordonnées x et y de unEvent, on affiche ces coordonnées en console.


// let img = document.querySelector("img");

// EXO DOM image Click pt 2 : 
// JS : 
// Dans la fonction du addEventListener, 
// - dans une variable monImg on va créer un élément img

// -Ensuite on modifie l’attribut src de monImg pour lui donner une source d'image (fillMurray etc..)

// -Sur monImg on va aller dans style pour modifier sa position que l’on mettra en absolute

// -Sur monImg on va aller dans style pour modifier sa propriété left à laquelle on assigne la coordonnée x de unEvent (en pixels)

// -Sur monImg on va aller dans style pour modifier sa propriété top à laquelle on assigne la coordonnée y de unEvent (en pixels)

// -On oublie pas de placer monImg dans le body de document.

// addEventListener("click", function(unEvent){
//     let monImg = document.createElement("img");
//     monImg.src ="https://www.fillmurray.com/100/100";
//     monImg.style.position = "absolute";
//     monImg.style.left = unEvent.clientX-50+"px";
//     monImg.style.top = unEvent.clientY-50+"px";
//     document.body.appendChild(monImg);
// });

// EXO DOM Editeur de texte : 
// HTML : 
// On a 1 textarea et 1 div vide

//  JS : 
// -Dans 1 variable monTxt on récup le textarea
// -Dans 1 variable rendu on récup la div vide 
// -Trouver un moyen de surveiller ce que tape l'utilisateur au clavier 
// -Ce que l'utilisateur tape on le met dans le innerHTML de rendu


// EXO DOM Editeur de texte + local Storage 
// Aller se renseigner sur les fonction getItem et setItem du Local Storage

// On va stocker ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
// Il faudra aussi pré-remplir le textarea avec ce que l'on récupère du localStorage


// JS : 

// - à la valeur de monTxt on assigne monSuperTexte que l'on récupère depuis le localStorage avec la fonction getItem


// -Ensuite avec un if on vérifie si la valeur de monTxt est bien définie 
// if(monTxt.value){}


// - Dans le if, on assigne au innerHtml de rendu, monSuperTexte qu'on récupère depuis le localStorage via getItem()

// -Après le if on a tjrs notre addEventListener sur monTxt, dans la fonction du addEventListener : 
// - On enregistre ce que tape l'utilisateur sous le nom monSuperTexte dans le localStorage via la fonction setItem(), 
// - Ensuite on a tjrs rendu.innerHTML = marked(monTxt.value)


// let monTxt = document.querySelector("textarea");
// let rendu = document.querySelector("div");
// monTxt.value = localStorage.getItem("monSuperTexte");

// if(monTxt.value){
//     rendu.innerHTML = localStorage.getItem("monSuperTexte");
// }
// monTxt.addEventListener("keyup", function(){
//     localStorage.setItem("monSuperTexte",monTxt.value);
//     rendu.innerHTML = marked(monTxt.value);
// });



