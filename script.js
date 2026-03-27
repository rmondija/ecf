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

const quizState = {
    1: null,
    2: null,
    3: null,
};

const quizDefaults = {
    q1: "Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement",
    q2: "Faux !",
    q3: "Vrai, ils refusent les animaux malades c’est trop couteux",
    q4: "Faux !",
    q5: "Vrai, elles reçoivent beaucoup d’argent des donateurs",
    q6: "Faux !",
};

const quizResultText = {
    q1: '<img src="images/done.png"> Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement',
    q2: '<img src="images/close.png"> Faux ! Chez Quatres Pattes, 85% des dons sont dierctement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.',
    q3: '<img src="images/close.png"> Vrai, ils refusent les animaux malades c’est trop couteux',
    q4: '<img src="images/done.png"> Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte.',
    q5: '<img src="images/done.png"> Vrai, elles reçoivent beaucoup d’argent des donateurs.',
    q6: '<img src="images/close.png"> Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux.',
};

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

function getBaseClass(id) {
    return {
        q1: "left1-div",
        q2: "right1-div",
        q3: "left2-div",
        q4: "right2-div",
        q5: "left3-div",
        q6: "right3-div",
    }[id];
}

function getQuizGroup(id) {
    if (id === "q1" || id === "q2") return 1;
    if (id === "q3" || id === "q4") return 2;
    if (id === "q5" || id === "q6") return 3;
    return null;
}

function renderQuizGroup(group) {
    const ids = group === 1 ? ["q1", "q2"] : group === 2 ? ["q3", "q4"] : ["q5", "q6"];
    const selected = quizState[group];

    ids.forEach((qid) => {
        const div = document.getElementById(qid);
        const baseClass = getBaseClass(qid);

        if (!selected) {
            div.className = baseClass;
            div.innerHTML = quizDefaults[qid];
            return;
        }

        if (qid === selected) {
            const correct = qid === "q1" || qid === "q4" || qid === "q5";
            div.className = `${baseClass} ${correct ? "divOk" : "divFalse"} width`;
            div.innerHTML = quizResultText[qid];
        } else {
            div.className = `${baseClass} display`;
            div.innerHTML = quizDefaults[qid];
        }
    });
}

function quiz(id) {
    const quizId = id.replace("div", "q");
    const group = getQuizGroup(quizId);
    if (!group) return;

    quizState[group] = quizId;
    renderQuizGroup(group);

    // Ne réinitialise pas les autres questions : l'état est conservé
    resultButton();
}

function diaporama(element) {
    const imageSrc = element.src;
    const imageTexte = element.getAttribute("data-texte");
    document.getElementById("image").src = imageSrc;
    document.getElementById("texte-principal").innerHTML = imageTexte;
}
