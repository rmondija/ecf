function validateForm() {
    // Récupération des champs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Récupération des éléments d'erreur
    const errorUsername = document.getElementById("error-username");
    const errorEmail = document.getElementById("error-email");

    // Réinitialiser les messages d'erreur
    errorUsername.innerHTML = "";
    errorEmail.innerHTML = "";

    let isValid = true;

    // Validation du nom d'utilisateur
    if (username === "") {
        errorUsername.innerHTML = "Le nom d'utilisateur est obligatoire.";
        isValid = false;
    }

    // Validation de l'email
    if (email === "") {
        errorEmail.innerHTML = "L'adresse E-mail est obligatoire"
        isValid = false
    } else if (email.indexOf("@") == -1) {
        errorEmail.innerHTML = "L'adresse E-mail est invalide"
        isValid = false
    }
    
    // Si tout est valide
    if (isValid) {
        alert("Formulaire envoyé avec succès!");
    }

    return isValid; // Retourne true si tout est valide, false sinon
}

let montant = "";
let periodeSelectionnee = "";

function resultButton() {
    const resultButton = document.getElementById("resultButton");
    resultButton.innerHTML = `<img src="images/heart.png" alt="heart icon"> ${montant} ${periodeSelectionnee}`;
}

function modif(id) {
    const div1 = document.getElementById("modif10");
    const div2 = document.getElementById("modif20");
    const div3 = document.getElementById("modif50");

    div1.setAttribute("class", "euro");
    div2.setAttribute("class", "euro");
    div3.setAttribute("class", "euro");

    if (id === "div1") {
        div1.setAttribute("class", "euro eurovert");
        montant = "Faire un don de 10€";
    } else if (id === "div2") {
        div2.setAttribute("class", "euro eurovert");
        montant = "Faire un don de 20€";
    } else if (id === "div3") {
        div3.setAttribute("class", "euro eurovert");
        montant = "Faire un don de 50€";    
    }
    resultButton();
}

function periode(id) {
    const div1 = document.getElementById("une").getElementsByTagName('button')[0];
    const div2 = document.getElementById("mois").getElementsByTagName('button')[0];
    const div3 = document.getElementById("ans").getElementsByTagName('button')[0];

    div1.setAttribute("class", "bouton1");
    div2.setAttribute("class", "bouton1");
    div3.setAttribute("class", "bouton1");

    if (id === "div1") {
        div1.setAttribute("class", "bouton1 bouton1vert");
        periodeSelectionnee = "/une fois";
    } else if (id === "div2") {
        div2.setAttribute("class", "bouton1 bouton1vert");
        periodeSelectionnee = "/par mois";
    } else if (id === "div3") {
        div3.setAttribute("class", "bouton1 bouton1vert");
        periodeSelectionnee = "/par an";
    }
    resultButton();
}