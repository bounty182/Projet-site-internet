var firebaseConfig = {
apiKey: "AIzaSyA5QxmJof1IWYIOEmKDbx9UDKLnzQlBpSg",
authDomain: "bountylab-2ff56.firebaseapp.com",
databaseURL: "https://bountylab-2ff56-default-rtdb.firebaseio.com",
projectId: "bountylab-2ff56",
storageBucket: "bountylab-2ff56.appspot.com",
messagingSenderId: "530942248409",
appId: "1:530942248409:web:3dffb8d4da90e95409c5c8",
measurementId: "G-NPDRPEEQJL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

// Firebase SAVE 
// °Créer la fonction saveUserBtnClicked 
// ° Dans une variable userID on récupère la VALUE de l’inputs avec la classe édit-user-input 
// ° 1 Variable userRef fait référence à notre BDD sur l’utilisateur qu’on a cliqué 
// °Créer une variable editedUserObject, un objet vide 
// °Dans une variable editUserInputsUI, on récupère tous les éléments de classe edit-user-input (querySelectorAll ??)

// °Sur editUserInputsUI on place un forEach ()
// °Dans les param de forEach() on a une fonction qui prend une variable textField en paramètre 
// Dans cette fonction dans le forEach, on a une variable key qui stock les attributs « data-key » de textField (getAttribute ???)
// °on assigne à editedUserObject à l’indice key, la value de textField
// °En dehors du forEach, sur userRef on peut utiliser la fonction update pour lui passer le editedUserObject 
// ° un console log avec un msg qui confirme l’enregistrement
// °On repasse le display de notre édit-user-module à none


function editButtonClicked(event){
    let editBut = document.getElementById("edit-user-module");
    editBut.style.display ="block";
    document.querySelector(".edit-userid").value = event.target.getAttribute("userid");
    let userID = event.target.getAttribute("user-key");
    const userRef = dbRef.child('users/'+userID);
    let editUserInputsUI = document.querySelectorAll("edit-user-input");
    userRef.on("value", snap => {
        for(let i=0 ; i<editUserInputsUI.length; i++){
            let key = editUserInputsUI[i].getAttribute("data-key");
            let value = editUserInputsUI[i].value;
        }})
    let saveBtn = document.getElementById("edit-user-btn");
    saveBtn.addEventListener("click",saveUserBtnClicked);
};


// Firebase EDIT 
// °Créer la fonction editButtonClicked qui reçoit event en paramètre 
// °on va modifier le display du edit-user-module à block 
// ° Ensuite on va faire ceci : document.querySelector(".edit-userid").value = event.target.getAttribute(« userid");
// Cela va rajouter le userId dans un input caché dans mon formulaire 
// ° une variable userRef Faire une référence à notre BDD directement sur le noeud de l’utilisateur qu’on a cliqué rappelez vous event.target
// ° Dans une variable editUserInputsUI, on récupère tous les éléments de classe edit-user-input (querySelectorAll ou autre)
// ° On va parcourir notre BDD avec userRef.on("value", snap => {

// Dans la fonction=> : 
// °Faire une boucle for qui parcourt les inputs editUserInputsUI,
// ° dans une variable key, on stock editUserInputsUI[i].getAttribute("data-key");
// ° Ensuite à chaque valeur de nos editUserInputsUI[i] on assigne snap.val()[key];
// ° En dehors de la fonction on() mais toujours dans editButtonClicked,
// Dans une variable saveBtn, on récupère notre bouton avec l id édit-user-btn 
// °Sur ce bouton on place un eventListener au click qui lance saveUserBtnClicked


function deleteButtonClicked(event){
    let userID = event.target.getAttribute("userid");
    const userRef = dbRef.child('users/'+userID);
    userRef.remove();
};

function userClicked(event) {
    let userID = event.target.getAttribute("user-key");
    const userRef = dbRef.child('users/'+userID);
    const userDetailUI = document.getElementById("user-detail");
    //User sans "s" pour n'en recup qu'un
    userRef.on("value", snap =>{
        userDetailUI.innerHTML = "";
        snap.forEach(childSnap =>{
            let $p = document.createElement("p");
            $p.innerHTML = `${childSnap.key} - ${childSnap.val()}`;
            userDetailUI.append($p);
        });
    })
}

function readUserData() {

    const userListUI = document.getElementById("user-list");

    usersRef.on("value", snap => {
        userListUI.innerHTML = ""
//snap = Photo de la BDD à ce moment là 
        snap.forEach(childSnap => {
            //on Stock les clé et valeurs
            let key = childSnap.key,
                value = childSnap.val();

            let $li = document.createElement("li");

            // edit icon
            let editIconUI = document.createElement("span");
            editIconUI.class = "edit-user";
            editIconUI.innerHTML = "  ✎";
            editIconUI.setAttribute("userid", key);
            editIconUI.addEventListener("click", editButtonClicked)
            
            // delete icon
            let deleteIconUI = document.createElement("span");
            deleteIconUI.class = "delete-user";
            deleteIconUI.innerHTML = "  ☓";
            deleteIconUI.setAttribute("userid", key);
            deleteIconUI.addEventListener("click", deleteButtonClicked)

            
            $li.innerHTML = value.name;
            $li.append(editIconUI);
            $li.append(deleteIconUI);

            $li.setAttribute("user-key", key);
            $li.addEventListener("click", userClicked)
            userListUI.append($li);

         });
    })
}

readUserData();

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

function addUserBtnClicked() {
    //une reférence à notre table users
    const usersRef = dbRef.child('users');
    // Récup des 3 inputs
    const addUserInputsUI = document.getElementsByClassName("user-input");
    console.log(addUserInputsUI);
     // Cet objet va stocker les infos du nouvel utilisateur
    let newUser = {};
    // On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    // Ci dessous on récupère les key et value
        let key = addUserInputsUI[i].getAttribute('data-key');
    // Valeur qu'on récup dans les inputs.    
        let value = addUserInputsUI[i].value;
    // Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
        newUser[key] = value;
    }
    // on ajoute notre nouvel utilisateur dans la BDD
    usersRef.push(newUser);
    console.log(newUser.name,newUser.age);
    console.log("nouvel utilisateur enregistré");
    document.getElementById("leFormulaireAjout").reset();
}

function saveUserBtnClicked(){
    let userID = editUserInputsUI.value;
    let userRef = dbRef.child("users/"+userID);
    let editedUserObject = {};
    let editUserInputsUI = getElementsByClassName("edit-user-input");
    editUserInputsUI.forEach(function(textField){
        let key = document.getElementsByClassName("textField").getAttribute("data-key");
        editedUserObject.key = textField.value;
    });
    userRef.update(editedUserObject);
    console.log("maybe ca marche");
    document.getElementById('edit-user-module').style.display = "none";
}