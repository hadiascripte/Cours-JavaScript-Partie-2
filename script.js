//***************************************** Les différents sélécteurs

//querySelector est une "method" (fonction) qui est déjà codé (dans le code source JavaScript) qui permet de sélectionnner sur le DOM (en disant query.Selector('body') notre élément.

// Pour lui indiquer que nous voulons lui injecter une propriété css nous ajoutons .style puis les attributs CSS que nous souhaitons.

/*document.querySelector("h4").style.background = "yellow";

//Nous pouvons également sélectionner un élément en mettant le query.selector('') dans une variable. Cette sélection doit se faire le plus haut possible.

/*const baliseHtml = document.querySelector('h4');
console.log(baliseHtml);/*

// Nous pourrons ensuite sélectionner ce query.selector('') avec ses valeurs en utlisant directement sa variable

/*baliseHtml.style.background = "yellow";*/

//***************************************** Click event

// // Pour cibler un class il faut utiliser le . pour qu'elle soit pointé correctement. Sans le point il ne saura pas qui est pointé :

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(btn1, btn2);
// console.log(response);

/*questionContainer.style.borderRadius = "150px";*/

// Pour lui ajouter un événement nous devons ajouter deux paramètres :

// 1er = l'événement en question
// 2ème = la fonction souhaitée

// Il faut à chaque fois réaliser un console.log pour être sûr que notre addEventListener fonctionne bien.

//Nous avons vu qu'il était possible d'ajouter du style en JS en sélectionnant la variable et en ajoutant le .style. Mais ici, le mieux est de créer une class dans le CSS pour ensuite l'injecter dans le JS. On utilise pour cela: .classList.add("nom-de-la-class")

//Attehtion: nous n'avons pas besoin de mettre un . dans la parenthèse car ici il ne s'agit pas d'une class HTML mais d'un class CSS qui a éte fait pour être injectée dans le JS. En lui disant .classList il sait déjà qu'il s'agit d'une class.

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});

//Pour retirer une class déjà injectée, on peut revenir dans la variable en question et ajouter: .toggle (à la place de .add).

// Ceci indique que: si la class y est on l'enlève et si elle n'y est pas on la rajoute.

//Pour ajouter une événement sur un sélecteur on va ici cibler la variable (qui doit être cibler le plus haut posssible). Je remonte donc à la ligne 23

//Une fois l'élément sélectionné (ligne 23), on ajoute maintenant un événement.

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.visibility = "visible";
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    // response.style.visibility = "visible";
    response.classList.add("show-response");
    response.style.background = "red";
});

/* A noter que en CSS le #id > .class > balise. En ajoutant directement dans une balise style dans une div (<div style="">) le style sera prioritaire sur tous les autres. */

//***************************************** Mouse Events
// -------------------------------------------------

// ***** Mouse move
const mousemove = document.querySelector(".mousemove");

// Le (e) est un paramètre que l'on peut ajouter dans notre fontion et permet de récuperer des données.

// Pour que le cercle suive la souris il faut sélectionner e.pageX et e.pageY car ils repésentent l'exacte prosition de la souris.

//On utilise left et top car en CSS ce sont ces propriétés qui donne le positionnement d'un élément.

// Il ne faut pas oublier d'ajouter par une concaténation des valeurs en PX
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

// ***** Mouse down

window.addEventListener("mousedown", () => {
    //Pour donner une taille deux fois plus grosse
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    //Attention, un élément HTML ne peut pas avoir deux fois la même propriété CSS. Il faut donc lui rappeler la première propriété dans la deuxième propriété
});

// ***** Mouse up

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

// ***** Mouse enter (lorsque la souris entre dans une zone. Il est différent du hover )

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
// ***** Mouse out (lorsque la souris quitte une zone. Il est différent du hover )

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

// -------------------------------------------------------
// ***** Keypress Event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
// ***** Son lors de l'appuie du son

const ring = (key) => {
    // Ici nous faisons référence à un Objet JS qui est codé dans le code source pour faire un audio. New est utilisé pour un objet

    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
    // Pour que la fonction prenne un paramètre qui pourrait servir pour tous les fichiers audio qui utilisent cet audio il faut ajouter à audio.src=key +".mp3" (qui est dans la fonction ring). Pour que ce soit fonctionnel il faut ajouter KEY en paramètre de la fonction

    //
};

// Pour ajouter du texte en JS il faut ajouter un événement textContent. Nous pouvons, soit ajouter un texte prédéfini en utilisant les "" ou soit la touche qui sera saisi par l'utilisateur en ajoutant directement e.key

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;
    if (e.key === "h") {
        keypressContainer.style.background = "green";
        // keypressContainer.innerHTML+="<h3> Bravo, tu as trouvé la bonne lettre !</h3>"
    } else keypressContainer.style.background = "black";

    if (e.key === "h") ring(e.key);
});

//****** Scroll Event

// Pour faire afficher la barre nav après avoir scroll quelques pixel il faut lui mettre un top à -50px (par exemple) pour qu'elle n'apparaisse pas dans le body.

// Puis nous allons la faire réapaparaitre après avoir scrollé un certain nombre de pixels.

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-50px";
    }
});

//  ----------------------------------- Formulaire
//****** Evénement sur un input

//  Pour avoir un aperçu de ce qui est tapé dans le input il faut ajoute e.target.value

// Pour stocker ce qui est tapé dans l'input il faut créer une noite qui sera évolutive (let). que l'on laissera vide au départ.

// Puis nous ajoutons dans la fontion la variable let pseudo=e.target.value;

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
    language = e.target.value;
});
// Pour stocker les informations données dans les inputs ou textarea, nous devons envoyer les données dans une boite qui sera une variable.

form.addEventListener("submit", (e) => {
    // La plus part du temps il faut ajouter une méthode au formulaire pour empêcher le navigateur d'agir avec ses paramètres par défaut. En ajoutant e.preventDafault() on annule ce changement de page qui est un paramètre par défaut. Il faut bien ajoute (e) dans le paramètre
    e.preventDefault();

    // Il faut maintenant faire en sorte que les CGV soient bien cochées avant de pourvoir valider. On va donc mettrte cette logique dans un IF.
    // A noter que nous n'avons pas besoin de déclarer de variable pour une check box. Il suffot de mettre un ID pour que JS le connaisse. Ceci fonctionne aussi pour les boutons.

    if (cgv.checked) {
        //Nous allons ici ajouter des balises avec innerHtml en utilisant la concaténation avec les guillemets de la touche 7. Nous souhaitons ici injecter les balises dans la div qui est dans le formulaire.

        document.querySelector("form>div").innerHTML = `<h3>Pseudo: ${pseudo}</h3>
        <h4>Langage préféré: ${language}</h4>
        `;
    } else {
        alert("Veuillez accepter les CGV");
    }
});
//****** Load Event
// Il se déclenche une fois que toute la page a été chargé. Ceci peut éviter les problèmes de performance.

window.addEventListener("load", () => {
    //On y ajoute ici ce que l'on veut faire déclencher
});

// Pour sélection plusieurs éléments à qui on voudrait donner les mêmes paramètres on peut le faire de deux façons.

const boxes = document.querySelectorAll(".box");
// console.log(boxes);
// Attention, on ne l'utilise que s'il y a plusieurs éléments qui ont cette class en question

//****** For Each
// boxes.addEventListener("click", () => console.log("test"));

// A savoir que l'on ne peut pas faire un addEventListener sur plusieur éléments. Il faudra pour cela le faire pour chacun des éléments.

// On réalise donc une method forEach pour chacun d'eux
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        // e.target.style.transform = "scale(0.7)";
    });
});

//***** addEventListener VS onclick

// Il n'est pas recommandé d'utiliser le onclick car on ne peut lui attribuer qu'un seul événement. Si on ajoute un événement, le dernier événement écrasera le précédent.

// document.body.onclick = (ring) => {
//     console.log("ring");
// };

//*****
// Dans addEventListener il y a deux événements Bubbling et Usecapture

//Bubbling=> ici l'événement est déclenché à la fin. Il est par défaut sur false
document.body.addEventListener("click", () => {
    // console.log("click 1 !");
});

//Usecapture=> ici l'événement est déclenché au début en ajoutant un 3ème arguments dans les paramètre. Il faut impérativement ajouter True en 3ème argument pour qu'il soit pris en premier.
// A noter qu'il devancera tout les événement qui auront un click.
document.body.addEventListener(
    "click",
    () => {
        // console.log("click 2 !");
    },
    true
);

//************ Stop propagation

// Pour arrêter un événement que l'on a paramètré, on récupère l'événement dans(e) et on ajoute e.stopPropagation();
questionContainer.addEventListener("click", (e) => {
    // alert ("test 1");
    // e.stopPropagation();
});

//  ----------------------------------- BOM
//****** Le Browser Object Model
// Il est au dessus du BOM. Il comprend l'objey Window qui, lui, comprend le DOM(document), BOM(navigateur,ecran,historique, frames,location), JavaScript(objets, array, function).

// console.log(window.innerHeight);
// Avec window.donnée, nous avonc accès a beaucoup d'information.

// Il permet principalement d'exécuter des actions. Ici nous faisons un popup

//  window.open("http://google.com", "cours js", "height=600 width=800px");

//  Pour fermer la fenêtre on peut faire un window.close
// window.close()

// ******* Evénements adossé à window

// ***** Alert
// window.alert("Hello");

// ***** Confirm
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment valider cette réponse ?");
});

//***** Prompt
// Permet de demander à l'utilisateur de rentrer des données
btn1.addEventListener("click", (e) => {
    // prompt("Entrez votre nom !")
    // Pour stocker les données rentrées par l'utilisateur nous pouvons ajoueter une variable let qui servira de stockage. On l'ajoute sur la fonction qui est dans btn1
    let answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});

// ------------------------------------------------------------

//***** setTimeout
// Il s'agit d'une sorte de compte à rebours, un timer. Il se compose de 2 arguments.

// setTimeout(() => {
//     // Une logique a exécuter
//     questionContainer.style.borderRadius = "300px";
//     //  Un temps défini en milliseconde avant de s'exécuter
// }, 2000);

//***** setInterval
// Pour créer des boucles infinies, car il ne s'arrête jamais.
// Pour lui donner un temps d'arrêt on doit le déclarer dans une variable.

// let interval = setInterval(() => {
//     // Une logique a exécuter
//     document.body.innerHTML += `<div class="box">
//         <h2> Nouvelle boîte</h2>
//     </div>`;
//     //  Un temps défini en milliseconde avant de s'exécuter
// }, 1000);

// document.body.addEventListener("click", (e) => {
// Pour arrêter l'événement
// clearInterval(interval);
// Pour supprimer un élément
// e.target.remove();
// });

// ***** Location
// Il permet d'avoir des informations sur le lieu exact d'où se trouve l'utilisateur et de le rediriger vers des sites externes.

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// Pour envoyer l'utilisateur sur un autre site on utilise le location.replace
// location.replace("http://lequipe.fr");

// // On peut également utiliser
// window.onload = () => {
//     location.href = "http://google.com";
// };

// ***** Navigator
// Permet d'avoir des informations sur les données de navigations sur le navigateur web de l'utlisateur
// console.log(navigator.userAgent);

//Il permet également de géolocaliser l'utilisateur. Pour cela il faut utiliser un code qui se trouve dans la documentation

// ***** History

// Il permet
// console.log(history);

// Pour faire un retour en arrière, par exemple après la validation d'un formulaire il faut ajouter window.history.back();
// window.history.back();
// Pour revenir en arrière sur plusieurs pages il faut ajouter le nombre de retour voulu
// history.go(-2)

// ***** setProperty
// Pour ajouter un after sur le mouvement de la souris ceci ne fonctionnerait pas car en JS on ne peut pas cibler un after.

// On doit donc ajouter en CSS un after et ses propriété CSS et on ajoute en CSS          left: var(--x) ;
//           top:var(--y) ;

window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
});
