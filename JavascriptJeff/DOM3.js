// preventDefault
// EXO DOM PreventDefault : 

// HTML : 
// 1 formulaire qui contient
//  1 input de type texte avec un placeholder
// et 1 button de type submit

// Récupérer le formulaire dans une variable monForm

// let monForm = document.querySelector("form");

//  Sur monForm placer un addEventListener qui écoute "submit" et qui lance une fonction 

// monForm.addEventListener("submit",function(event){event.preventDefault();console.log("OK",event);monForm.reset();});

// EXO DOM 30 Contact API count 

// HTML : 
// -1 titre h1
// -1 titre h2 avec un id counter 
// -Faire en sorte de charger le fichier js en déféré (go voir defer) 

// JS : 
// °Dans 1 variable counter on stocke notre h2 


// °Dans 1 constante majCounter on stocke une fonction fléchée de manière asynchrone, 

// -dans cette fonction : 

// °on a 1 variable data (en mode await) on utilise la fonction fetch pour contacter l'api https://api.countapi.xyz/hit/namespace/key 
// (1 namespace et 1 key unique dans l'url) 

// °on a 1 variable count (en mode await) 
// °on utilise la fonction .json() sur data pour transformer les données en json 
// °Ensuite on va modifier le innerHTML de counter pour lui assigner la valeur de counter
// °Et on modifie dans le style de counter son filter auquel on assigne 'blur(0)' 
// °Dans le fichier JS on oublie pas d'appeler la fonction majCounter()

// let counter = document.querySelector("h2");

// const majCounter = async() => {let data = await fetch("https://api.countapi.xyz/hit/bounty/boubi"); let count = await data.json();counter.innerHTML = count.value;counter.style.filter = "blur(0)";};

// majCounter();


// EXO DOM : Suppr Voyelles 

// Go se renseigner sur les fonction includes() et join()

// HTML : 
// Juste un textarea


// JS : 
// -1 variable leTexte va récupérer notre textarea
// -1 variable txt qui est un tableau vide
// -1 variable voyelles, un tableau qui contient toutes les voyelles 

// -Sur leTexte, on ajoute un addEventlistener qui va surveiller ce que tape l’utilisateur et lance 1 fonction avec une variable unEvent en paramètre 

// Dans cette fonction : 
// -1 variable uneTouche va stocker les lettres que tape l’utilisateur (unEvent.qqchose)

// -Avec un if on va vérifier si le tableau voyelles INCLUT  uneTouche,
//  alors on rajoute uneTouche dans le tableau txt (rappelez vous comment on insère des truc dans un tableau)

// let leTexte = document.querySelector("textarea");
// let txt = [];
// let voyelles = ["a","e","i","o","u","y"];

// leTexte.addEventListener("keypress",function(unEvent){
//    let uneTouche = unEvent.key;
//     if(!voyelles.includes(uneTouche)){
//         txt.push(uneTouche);
//     }
//     console.log(txt.join("-"));
// });