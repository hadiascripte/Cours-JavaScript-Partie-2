
## Qu'est-ce que le DOM
# Introduction au DOM en JavaScript

Le **DOM (Document Object Model)** est une interface de programmation qui représente la structure d'un document HTML ou XML sous forme d'un arbre. Grâce au DOM, JavaScript peut interagir avec une page web en lisant, modifiant ou supprimant ses éléments dynamiquement.

## 📌 Comment fonctionne le DOM ?

Lorsqu'un navigateur charge une page web :
1. Il analyse le fichier **HTML** et construit une hiérarchie d'éléments sous forme d'un **arbre DOM**.
2. Cet arbre contient des **nœuds** représentant les éléments HTML (`<div>`, `<p>`, `<h1>`, etc.).
3. JavaScript peut manipuler ces nœuds pour changer le contenu, les styles ou la structure de la page.

## 🌳 Exemple d'un arbre DOM

Si tu as un HTML comme ceci :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ma Page</title>
</head>
<body>
    <h1 id="titre">Bonjour !</h1>
    <p class="texte">Ceci est un paragraphe.</p>
</body>
</html>
```

Le DOM ressemble à ceci :

```
Document
 ├── html
 │   ├── head
 │   │   └── title
 │   ├── body
 │       ├── h1 (id="titre")
 │       └── p (class="texte")
```

Chaque élément HTML devient un **nœud** dans l'arbre DOM.

## 🛠 Manipulation du DOM avec JavaScript

Avec JavaScript, tu peux interagir avec les éléments de la page. Par exemple :

### ✅ Sélectionner un élément et modifier son contenu :
```js
document.getElementById("titre").textContent = "Salut !";
```
Cela change :
```html
<h1 id="titre">Bonjour !</h1>
```
En :
```html
<h1 id="titre">Salut !</h1>
```

### ✅ Modifier le style d’un élément :
```js
document.querySelector(".texte").style.color = "blue";
```
Cela change la couleur du texte du paragraphe en bleu.

### ✅ Ajouter un nouvel élément :
```js
let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Texte ajouté dynamiquement !";
document.body.appendChild(nouveauParagraphe);
```
Un nouveau paragraphe est ajouté à la fin du `<body>`.

## 🎯 Pourquoi le DOM est important ?

- Permet de **modifier le contenu** de la page sans recharger.
- Utilisé pour **réagir aux interactions utilisateur** (clics, saisies, etc.).
- Essentiel pour rendre une page **interactive et dynamique**.

---
💡 **En résumé** : Le DOM est une représentation en arbre d'un document HTML. Grâce à JavaScript, on peut accéder et modifier ces éléments dynamiquement.


## Les sélecteurs

# Les Différents Sélecteurs en JavaScript

En JavaScript, il est essentiel de pouvoir sélectionner des éléments HTML pour interagir avec eux. Voici les différents sélecteurs disponibles en JavaScript.

## 📌 1. Sélection par ID

Le sélecteur **getElementById()** permet de récupérer un élément HTML en fonction de son `id`.

### Exemple :
```js
document.getElementById("monId").textContent = "Nouveau texte";
```
🔹 Sélectionne l'élément ayant l'`id="monId"` et modifie son contenu.

## 📌 2. Sélection par Classe

La méthode **getElementsByClassName()** sélectionne tous les éléments ayant une classe spécifique.

### Exemple :
```js
let elements = document.getElementsByClassName("maClasse");
elements[0].style.color = "red";
```
🔹 Sélectionne tous les éléments avec `class="maClasse"`, puis applique une couleur rouge au premier.

## 📌 3. Sélection par Nom de Balise

La méthode **getElementsByTagName()** permet de récupérer tous les éléments d’un certain type de balise.

### Exemple :
```js
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontWeight = "bold";
```
🔹 Sélectionne tous les `<p>` et applique un style gras au premier.

## 📌 4. Sélection avec querySelector()

La méthode **querySelector()** permet de sélectionner un seul élément correspondant à un sélecteur CSS.

### Exemple :
```js
document.querySelector(".maClasse").style.backgroundColor = "yellow";
```
🔹 Sélectionne le premier élément avec `class="maClasse"` et change son arrière-plan.

## 📌 5. Sélection avec querySelectorAll()

La méthode **querySelectorAll()** retourne une **NodeList** contenant tous les éléments correspondant au sélecteur CSS donné.

### Exemple :
```js
let elements = document.querySelectorAll("p.maClasse");
elements.forEach(el => el.style.textDecoration = "underline");
```
🔹 Sélectionne tous les `<p class="maClasse">` et les souligne.

## 🛠 Comparaison des Méthodes

| Méthode | Sélectionne | Retourne |
|---------|------------|----------|
| `getElementById()` | Un seul élément | Un objet |
| `getElementsByClassName()` | Plusieurs éléments | Une collection HTML |
| `getElementsByTagName()` | Plusieurs éléments | Une collection HTML |
| `querySelector()` | Le premier élément correspondant | Un objet |
| `querySelectorAll()` | Tous les éléments correspondants | Une NodeList |

## 🎯 Conclusion

Les sélecteurs en JavaScript permettent d'accéder facilement aux éléments HTML pour les manipuler dynamiquement. Selon le besoin, on choisira la méthode la plus adaptée ! 🚀


## AddEventListener
# 🎯 Comprendre `addEventListener` en JavaScript

L'événement `addEventListener` est une méthode puissante en JavaScript qui permet d'attacher un ou plusieurs gestionnaires d'événements à un élément HTML. Contrairement aux gestionnaires d'événements inline ou à l'attribut `onclick`, `addEventListener` offre plus de flexibilité.

---

## 📌 1. Syntaxe de `addEventListener`

```js
element.addEventListener("typeEvent", fonction, options);
```

- **`typeEvent`** : Le type d'événement à écouter (ex : "click", "mouseover", "keydown", etc.).
- **`fonction`** : La fonction qui sera exécutée lorsque l'événement se produit.
- **`options`** *(facultatif)* : Un objet définissant des options (ex : `once`, `capture`, `passive`).

---

## 📌 2. Exemple simple : Ajouter un événement `click`

```js
let bouton = document.getElementById("monBouton");
bouton.addEventListener("click", function() {
    alert("Bouton cliqué !");
});
```

🔹 Cet exemple affiche une alerte lorsque l'utilisateur clique sur le bouton avec l'`id="monBouton"`.

---

## 📌 3. Utilisation avec une fonction externe

```js
function afficherMessage() {
    console.log("Le bouton a été cliqué !");
}

document.getElementById("monBouton").addEventListener("click", afficherMessage);
```

🔹 Ici, `afficherMessage` est une fonction définie séparément et attachée à l'événement `click`.

---

## 📌 4. Ajouter plusieurs événements sur un même élément

```js
let monElement = document.getElementById("monElement");
monElement.addEventListener("mouseenter", () => {
    console.log("Souris entrée !");
});
monElement.addEventListener("mouseleave", () => {
    console.log("Souris sortie !");
});
```

🔹 On peut attacher plusieurs événements distincts sur un même élément sans écraser les anciens.

---

## 📌 5. Utilisation avec l'option `{ once: true }`

```js
document.getElementById("monBouton").addEventListener("click", () => {
    console.log("Ce message s'affichera une seule fois.");
}, { once: true });
```

🔹 L'événement ne se déclenchera qu'une seule fois grâce à l'option `{ once: true }`.

---

## 📌 6. Supprimer un gestionnaire d'événements avec `removeEventListener`

```js
function maFonction() {
    console.log("Événement déclenché");
}

let btn = document.getElementById("monBouton");
btn.addEventListener("click", maFonction);
btn.removeEventListener("click", maFonction);
```

🔹 Pour supprimer un événement, la fonction doit être nommée. Une fonction anonyme ne peut pas être retirée.

---

## 🎯 Conclusion

L'utilisation de `addEventListener` est essentielle pour gérer les interactions utilisateur de manière flexible et efficace. Il permet de séparer proprement le code HTML et JavaScript tout en offrant des fonctionnalités avancées comme l'exécution unique ou la suppression d'un événement.



## Les types d'événements

# 📌 Les Types d'Événements en JavaScript

JavaScript permet d'interagir avec les éléments HTML grâce aux **événements**. Un événement est une action déclenchée par l'utilisateur (clic, frappe au clavier, survol, etc.) ou par le navigateur (chargement, redimensionnement, etc.).

Voici une liste des types d'événements les plus courants en JavaScript.

---

## 🎯 1. Événements de la souris

Ces événements sont déclenchés lors des interactions avec la souris.

| Événement | Description |
|-----------|------------|
| `click` | Déclenché lorsqu'on clique sur un élément. |
| `dblclick` | Déclenché lors d'un double-clic. |
| `mousedown` | Déclenché quand un bouton de la souris est enfoncé. |
| `mouseup` | Déclenché quand un bouton de la souris est relâché. |
| `mousemove` | Déclenché lorsque la souris se déplace sur un élément. |
| `mouseover` | Déclenché quand la souris entre dans un élément. |
| `mouseout` | Déclenché quand la souris quitte un élément. |

### Exemple :
```js
document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
});
```

---

## ⌨️ 2. Événements du clavier

Ces événements sont déclenchés lors des interactions avec le clavier.

| Événement | Description |
|-----------|------------|
| `keydown` | Déclenché lorsqu'une touche est enfoncée. |
| `keyup` | Déclenché lorsqu'une touche est relâchée. |
| `keypress` (déprécié) | Déclenché lorsqu'une touche est pressée (n'est plus recommandé). |

### Exemple :
```js
document.addEventListener("keydown", function(event) {
    console.log("Touche pressée : " + event.key);
});
```

---

## 🌍 3. Événements de la fenêtre et du document

Ces événements affectent l'ensemble de la page ou du navigateur.

| Événement | Description |
|-----------|------------|
| `load` | Déclenché lorsque la page est entièrement chargée. |
| `resize` | Déclenché lorsque la fenêtre est redimensionnée. |
| `scroll` | Déclenché lors du défilement de la page. |
| `unload` | Déclenché lorsque la page est quittée. |

### Exemple :
```js
window.addEventListener("resize", function() {
    console.log("Fenêtre redimensionnée !");
});
```

---

## 🔄 4. Événements liés aux formulaires

Ces événements sont utiles pour gérer les interactions avec les formulaires HTML.

| Événement | Description |
|-----------|------------|
| `focus` | Déclenché lorsqu'un champ reçoit le focus. |
| `blur` | Déclenché lorsqu'un champ perd le focus. |
| `change` | Déclenché lorsqu'une valeur est modifiée dans un champ de formulaire. |
| `submit` | Déclenché lorsqu'un formulaire est soumis. |
| `input` | Déclenché lorsqu'un utilisateur saisit du texte dans un champ. |

### Exemple :
```js
document.getElementById("monInput").addEventListener("input", function(event) {
    console.log("Texte saisi : " + event.target.value);
});
```

---

## 🎥 5. Autres types d'événements

| Événement | Description |
|-----------|------------|
| `contextmenu` | Déclenché lors d'un clic droit. |
| `dragstart` / `dragend` | Déclenché lorsqu'un élément est glissé. |
| `drop` | Déclenché lorsqu'un élément est déposé. |
| `touchstart` / `touchend` | Déclenché lors d'un contact tactile sur un écran. |

### Exemple :
```js
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Clic droit désactivé !");
});
```

---

## 🎯 Conclusion

Les événements en JavaScript permettent de rendre une page interactive en réagissant aux actions des utilisateurs. En combinant plusieurs événements et fonctions, tu peux créer des interfaces dynamiques et engageantes !



## Méthodes autour des events

# 📌 Les Méthodes Autour des Événements en JavaScript

En JavaScript, les événements sont des actions déclenchées par l'utilisateur ou le navigateur. Pour mieux gérer ces événements, il existe plusieurs méthodes utiles.

---

## 🎯 1. `addEventListener()` – Ajouter un Événement

Cette méthode permet d'ajouter un écouteur d'événement à un élément sans écraser les gestionnaires existants.

### Syntaxe :
```js
element.addEventListener("typeEvent", fonction, options);
```

### Exemple :
```js
document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
});
```

---

## ❌ 2. `removeEventListener()` – Supprimer un Événement

Permet de retirer un gestionnaire d'événement précédemment attaché avec `addEventListener()`.

### Syntaxe :
```js
element.removeEventListener("typeEvent", fonction);
```

### Exemple :
```js
function afficherMessage() {
    alert("Bouton cliqué !");
}

let bouton = document.getElementById("monBouton");
bouton.addEventListener("click", afficherMessage);
bouton.removeEventListener("click", afficherMessage);
```

🔹 **Attention** : `removeEventListener()` ne fonctionne que si la fonction est nommée.

---

## 🎭 3. `event.preventDefault()` – Annuler le Comportement par Défaut

Empêche l'exécution du comportement par défaut d'un élément (ex : empêcher l'envoi d'un formulaire).

### Exemple :
```js
document.getElementById("monLien").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Lien désactivé !");
});
```

---

## 🌍 4. `event.stopPropagation()` – Arrêter la Propagation

Empêche un événement de se propager aux éléments parents (bubbling).

### Exemple :
```js
document.getElementById("monDiv").addEventListener("click", function() {
    alert("Div cliquée !");
});

document.getElementById("monBouton").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Bouton cliqué !");
});
```

🔹 Ici, cliquer sur le bouton déclenchera uniquement l'alerte du bouton, et pas celle de la div parent.

---

## 🔁 5. `event.stopImmediatePropagation()` – Bloquer Tous les Écouteurs Suivants

Arrête immédiatement l'exécution des autres écouteurs attachés au même élément.

### Exemple :
```js
document.getElementById("monBouton").addEventListener("click", function(event) {
    event.stopImmediatePropagation();
    alert("Premier événement");
});

document.getElementById("monBouton").addEventListener("click", function() {
    alert("Deuxième événement");
});
```

🔹 Seul le premier `alert` s'affichera.

---

## 🎯 Conclusion

Ces méthodes permettent un contrôle précis sur les événements en JavaScript. Que ce soit pour ajouter, supprimer ou modifier le comportement d'un événement, elles sont indispensables pour gérer efficacement les interactions utilisateur.



## For Each

# 🔁 La Méthode `forEach()` en JavaScript

La méthode `forEach()` est une fonction intégrée aux **tableaux** en JavaScript qui permet d'itérer sur chaque élément d'un tableau et d'exécuter une fonction pour chaque élément.

---

## 📌 1. Syntaxe de `forEach()`

```js
array.forEach(function(element, index, array) {
    // Code à exécuter pour chaque élément
});
```

🔹 **Paramètres** :
- `element` : L'élément actuel du tableau.
- `index` *(optionnel)* : L'index de l'élément dans le tableau.
- `array` *(optionnel)* : Le tableau d'origine.

---

## 📌 2. Exemple Simple

```js
let fruits = ["Pomme", "Banane", "Orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

🔹 **Sortie dans la console** :
```
Pomme
Banane
Orange
```

---

## 📌 3. Utilisation avec l'Index

```js
let nombres = [10, 20, 30];

nombres.forEach(function(nombre, index) {
    console.log(`Index ${index} : ${nombre}`);
});
```

🔹 **Sortie** :
```
Index 0 : 10
Index 1 : 20
Index 2 : 30
```

---

## 📌 4. Utilisation avec une Fonction Fléchée

```js
let couleurs = ["Rouge", "Vert", "Bleu"];

couleurs.forEach(couleur => console.log(couleur));
```

🔹 Plus concise avec une **fonction fléchée**.

---

## 📌 5. Modification des Éléments (Attention ⚠️)

La méthode `forEach()` **ne modifie pas** le tableau d'origine, mais vous pouvez modifier les objets mutables.

```js
let utilisateurs = [{ nom: "Alice" }, { nom: "Bob" }];

utilisateurs.forEach(utilisateur => utilisateur.nom += " ✨");

console.log(utilisateurs);
```

🔹 **Sortie** :
```
[{ nom: "Alice ✨" }, { nom: "Bob ✨" }]
```

---

## 📌 6. Différence avec `map()`

- **`forEach()`** : Exécute une fonction pour chaque élément mais **ne retourne rien**.
- **`map()`** : Retourne un **nouveau tableau** avec les résultats de la fonction appliquée.

```js
let nombres = [1, 2, 3];

let double = nombres.map(num => num * 2);
console.log(double); // [2, 4, 6]
```

---

## 🎯 Conclusion

La méthode `forEach()` est idéale pour parcourir un tableau et exécuter du code sur chaque élément. Cependant, si vous souhaitez **transformer** un tableau, `map()` est souvent plus approprié.



## Set Property

# 🎨 La Méthode `setProperty()` en JavaScript

La méthode `setProperty()` est utilisée pour modifier dynamiquement les styles CSS en JavaScript, notamment pour manipuler les variables CSS (custom properties).

---

## 📌 1. Syntaxe

```js
element.style.setProperty(propertyName, value, priority);
```

🔹 **Paramètres** :
- `propertyName` (*string*) : Nom de la propriété CSS (ex: `"--main-color"`).
- `value` (*string*) : Nouvelle valeur de la propriété (ex: `"blue"`).
- `priority` (*string*, optionnel) : Définit la priorité `important` (ex: `"important"`).

---

## 📌 2. Modifier une Variable CSS

### 🎯 Exemple : Définir une variable CSS
Dans une feuille de style :
```css
:root {
  --main-color: green;
}
```

En JavaScript :
```js
document.documentElement.style.setProperty("--main-color", "blue");
```
🔹 Cela change **toutes les occurrences** de `--main-color` en **bleu**.

---

## 📌 3. Modifier un Style CSS Directement

### 🎯 Exemple : Modifier un élément spécifique
```js
let box = document.querySelector(".box");
box.style.setProperty("background-color", "yellow");
```
🔹 Cela applique un **fond jaune** à l'élément `.box`.

---

## 📌 4. Ajouter une Priorité `important`

### 🎯 Exemple : Utiliser `important`
```js
document.documentElement.style.setProperty("--main-color", "red", "important");
```
🔹 Cela remplace **toute autre déclaration** de `--main-color`, même celles déjà définies comme `important`.

---

## 📌 5. Différence entre `setProperty()` et `style.property`

| Méthode | Avantages |
|---------|----------|
| `element.style.property = value` | Modifie directement un style, mais sans priorité. |
| `element.style.setProperty()` | Permet de gérer `important` et les **variables CSS**. |

---

## 🎯 Conclusion

`setProperty()` est un outil puissant pour :
✔️ Modifier dynamiquement les **variables CSS**.
✔️ Appliquer des styles en **important**.
✔️ Rendre une interface plus flexible et interactive.



## Synthèse du cours : générateur de bulles
## Les travaux pratiques