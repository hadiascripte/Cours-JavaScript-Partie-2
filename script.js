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

console.log(btn1, btn2);
console.log(response);

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
    response.style.visibility = "visible";
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.style.visibility = "visible";
    response.style.background = "red";
});
