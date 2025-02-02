function validateForm() {
    // Récupération des champs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Récupération des éléments d'erreur
    const errorUsername = document.getElementById("error-username");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");

    // Réinitialiser les messages d'erreur
    errorUsername.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMessage.innerHTML = "";

    let isValid = true;

    // Validation du nom d'utilisateur
    if (username === "") {
        errorUsername.innerHTML = "Le Nom est obligatoire.";
        isValid = false;
    }

    // Validation de l'email
    if (email === "") {
        errorEmail.innerHTML = "L'adresse Email est obligatoire."
        isValid = false
    } else if (email.indexOf("@") == -1) {
        errorEmail.innerHTML = "L'adresse Email est invalide."
        isValid = false
    }

    if (message === "") {
        errorMessage.innerHTML = "Veuillez saisir un message";
        isValid = false;
    }
    
    // Si tout est valide
    if (isValid) {
        alert("Formulaire envoyé avec succès!");
    }

    return isValid; // Retourne true si tout est valide, false sinon
}

let montant = "20€";
let periodeSelectionnee = "mois";

div2.setAttribute("class", "euro eurovert");
montant = "20€";

function resultButton() {
    const resultButton = document.getElementById("resultButton");
    resultButton.innerHTML = `<img src="images/heart.png" alt="heart icon"> Faire un don de ${montant} / ${periodeSelectionnee}`;
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
        montant = "10€";
    } else if (id === "div2") {
        div2.setAttribute("class", "euro eurovert");
        montant = "20€";
    } else if (id === "div3") {
        div3.setAttribute("class", "euro eurovert");
        montant = "50€";    
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
        periodeSelectionnee = "une fois";
    } else if (id === "div2") {
        div2.setAttribute("class", "bouton1 bouton1vert");
        periodeSelectionnee = "mois";
    } else if (id === "div3") {
        div3.setAttribute("class", "bouton1 bouton1vert");
        periodeSelectionnee = "an";
    }
    resultButton();
}

function afficherAlerte() {
    alert("Merci pour votre don !");
}

function quiz(id) {
    const div1 = document.getElementById("q1");
    const div2 = document.getElementById("q2");

    const div3 = document.getElementById("q3");
    const div4 = document.getElementById("q4");

    const div5 = document.getElementById("q5");
    const div6 = document.getElementById("q6");
    
    div1.setAttribute("class", "left1-div");
    div1.innerHTML = "Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement";
    div2.setAttribute("class", "right1-div");
    div2.innerHTML = "Faux !";
    div3.setAttribute("class", "left2-div");
    div3.innerHTML = "Vrai, ils refusent les animaux malades c’est trop couteux";
    div4.setAttribute("class", "right2-div");
    div4.innerHTML = "Faux !";
    div5.setAttribute("class", "left3-div");
    div5.innerHTML = "Vrai, elles reçoivent beaucoup d’argent des donateurs";
    div6.setAttribute("class", "right3-div");
    div6.innerHTML = "Faux !";


    div1.setAttribute("class", "left1-div");
    div2.setAttribute("class", "right1-div ");

    div3.setAttribute("class", "left2-div");
    div4.setAttribute("class", "right2-div");

    div5.setAttribute("class", "left3-div");
    div6.setAttribute("class", "right3-div");

    if (id === "div1") {
        div1.setAttribute("class", "left1-div divOk width");
        div2.setAttribute("class", "right1-div display")
        div1.innerHTML = '<img src="images/done.png"> Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement';
    } else if (id === "div2") {
        div2.setAttribute("class", "right1-div divFalse width");
        div1.setAttribute("class", "left1-div display")
        div2.innerHTML = '<img src="images/close.png"> Faux ! Chez Quatres Pattes, 85% des dons sont dierctement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.';
    }

    if (id === "div3") {
        div3.setAttribute("class", "left2-div divFalse width");
        div4.setAttribute("class", "right2-div display")
        div3.innerHTML = '<img src="images/close.png"> Vrai, ils refusent les animaux malades c’est trop couteux';
    } else if (id === "div4") {
        div4.setAttribute("class", "right2-div divOk width");
        div3.setAttribute("class", "left2-div display")
        div4.innerHTML = '<img src="images/done.png"> Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte.'
    }

    if (id === "div5") {
        div5.setAttribute("class", "left3-div divOk width");
        div6.setAttribute("class", "right3-div display")
        div5.innerHTML = '<img src="images/done.png"> Vrai, elles reçoivent beaucoup d’argent des donateurs.'
    } else if (id === "div6") {
        div6.setAttribute("class", "right3-div divFalse width");
        div5.setAttribute("class", "left3-div display")
        div6.innerHTML = '<img src="images/close.png"> Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux.'
    }
    resultButton();
}

function diaporama(element) {
    var imageSrc = element.src;
    var imageTexte = element.getAttribute("data-texte");
    document.getElementById("image").src = imageSrc;
    document.getElementById("texte-principal").innerHTML = imageTexte;
}
