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
        key.textContent = "H, bravo !";
        keypressContainer.style.background = "green";
    } else keypressContainer.style.background = "black";

    if (e.key === "h") ring(e.key);
});

// ***** Scroll Event

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
// ***** Evénement sur un input

//  Pour avoir un aperçu de ce qui est tapé dans le input il faut ajoute e.target.value

// Pour stocker ce qui est tapé dans l'input il faut créer une noite qui sera évolutive (let). que l'on laissera vide au départ.

// Puis nous ajoutons dans la fontion la variable let pseudo=e.target.value;

const inputName = document.querySelector('input[type="text"]');
let pseudo = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
    console.log(pseudo);
    
});
