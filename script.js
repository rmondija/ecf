const donationOptions = {
    div1: { elementId: "modif10", amount: "10€" },
    div2: { elementId: "modif20", amount: "20€" },
    div3: { elementId: "modif50", amount: "50€" },
};

const periodOptions = {
    div1: { elementId: "une", label: "une fois" },
    div2: { elementId: "mois", label: "mois" },
    div3: { elementId: "ans", label: "an" },
};

const quizConfig = {
    q1: {
        group: 1,
        baseClass: "left1-div",
        correct: true,
        defaultText: "Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement",
        resultText: '<img src="images/done.png"> Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement',
    },
    q2: {
        group: 1,
        baseClass: "right1-div",
        correct: false,
        defaultText: "Faux !",
        resultText: '<img src="images/close.png"> Faux ! Chez Quatre Pattes, 85% des dons sont directement utilises pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.',
    },
    q3: {
        group: 2,
        baseClass: "left2-div",
        correct: false,
        defaultText: "Vrai, ils refusent les animaux malades c\'est trop couteux",
        resultText: '<img src="images/close.png"> Vrai, ils refusent les animaux malades c\'est trop couteux',
    },
    q4: {
        group: 2,
        baseClass: "right2-div",
        correct: true,
        defaultText: "Faux !",
        resultText: '<img src="images/done.png"> Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte.',
    },
    q5: {
        group: 3,
        baseClass: "left3-div",
        correct: true,
        defaultText: "Vrai, elles reçoivent beaucoup d’argent des donateurs",
        resultText: '<img src="images/done.png"> Vrai, elles reçoivent beaucoup d’argent des donateurs.',
    },
    q6: {
        group: 3,
        baseClass: "right3-div",
        correct: false,
        defaultText: "Faux !",
        resultText: '<img src="images/close.png"> Faux ! Les besoins sont immenses et constants. Chaque don est precieux pour sauver plus d\'animaux.',
    },
};

const quizGroups = {
    1: ["q1", "q2"],
    2: ["q3", "q4"],
    3: ["q5", "q6"],
};

const quizState = {
    1: null,
    2: null,
    3: null,
};

let montant = "20€";
let periodeSelectionnee = "mois";

function validateForm() {
    const fields = [
        {
            inputId: "username",
            errorId: "error-username",
            validate(value) {
                if (value === "") {
                    return "Le nom est obligatoire.";
                }
                return "";
            },
        },
        {
            inputId: "email",
            errorId: "error-email",
            validate(value) {
                if (value === "") {
                    return "L'adresse email est obligatoire.";
                }
                if (!value.includes("@")) {
                    return "L'adresse email est invalide.";
                }
                return "";
            },
        },
        {
            inputId: "select",
            errorId: "error-select",
            validate(value) {
                if (value === "") {
                    return "Veuillez choisir un sujet.";
                }
                return "";
            },
        },
        {
            inputId: "message",
            errorId: "error-message",
            validate(value) {
                if (value === "") {
                    return "Veuillez saisir un message.";
                }
                return "";
            },
        },
    ];

    let isValid = true;

    fields.forEach(({ inputId, errorId, validate }) => {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);

        if (!input || !error) {
            return;
        }

        const message = validate(input.value);
        error.textContent = message;

        if (message) {
            isValid = false;
        }
    });

    if (isValid) {
        alert("Formulaire envoyé avec succès!");
    }

    return isValid;
}

function resultButton() {
    const buttonEl = document.getElementById("resultButton");
    if (!buttonEl) {
        return;
    }

    buttonEl.innerHTML = `<img src="images/heart.png" alt="heart icon"> Faire un don de ${montant} / ${periodeSelectionnee}`;
}

function resetClasses(optionMap, baseClass, getTarget) {
    Object.values(optionMap).forEach((option) => {
        const element = getTarget(option);
        if (element) {
            element.className = baseClass;
        }
    });
}

function modif(id) {
    const selectedOption = donationOptions[id];
    if (!selectedOption) {
        return;
    }

    resetClasses(donationOptions, "euro", (option) => document.getElementById(option.elementId));

    const selectedElement = document.getElementById(selectedOption.elementId);
    if (selectedElement) {
        selectedElement.className = "euro eurovert";
    }

    montant = selectedOption.amount;
    resultButton();
}

function periode(id) {
    const selectedOption = periodOptions[id];
    if (!selectedOption) {
        return;
    }

    resetClasses(periodOptions, "bouton1", (option) => {
        const container = document.getElementById(option.elementId);
        return container ? container.getElementsByTagName("button")[0] : null;
    });

    const selectedContainer = document.getElementById(selectedOption.elementId);
    const selectedButton = selectedContainer ? selectedContainer.getElementsByTagName("button")[0] : null;

    if (selectedButton) {
        selectedButton.className = "bouton1 bouton1vert";
    }

    periodeSelectionnee = selectedOption.label;
    resultButton();
}

function afficherAlerte() {
    alert("Merci pour votre don !");
}

function renderQuizGroup(group) {
    const ids = quizGroups[group] || [];
    const selected = quizState[group];

    ids.forEach((quizId) => {
        const element = document.getElementById(quizId);
        const config = quizConfig[quizId];

        if (!element || !config) {
            return;
        }

        if (!selected) {
            element.className = config.baseClass;
            element.textContent = config.defaultText;
            return;
        }

        if (quizId === selected) {
            element.className = `${config.baseClass} ${config.correct ? "divOk" : "divFalse"} width`;
            element.innerHTML = config.resultText;
            return;
        }

        element.className = `${config.baseClass} display`;
        element.textContent = config.defaultText;
    });
}

function quiz(id) {
    const quizId = id.replace("div", "q");
    const config = quizConfig[quizId];
    if (!config) {
        return;
    }

    quizState[config.group] = quizId;
    renderQuizGroup(config.group);
    resultButton();
}

function diaporama(element) {
    const mainImage = document.getElementById("image");
    const mainText = document.getElementById("texte-principal");
    if (!mainImage || !mainText || !element) {
        return;
    }

    mainImage.src = element.src;
    mainText.innerHTML = element.getAttribute("data-texte");

    document.querySelectorAll(".image-petit").forEach((thumbnail) => {
        thumbnail.classList.remove("selected");
    });

    const selectedThumbnail = element.closest(".image-petit");
    if (selectedThumbnail) {
        selectedThumbnail.classList.add("selected");
    }
}

function setupMobileMenu() {
    const nav = document.querySelector(".nav");
    const navBrand = document.querySelector(".nav-brand");
    const closeMenu = document.getElementById("closeMenu");
    const navLinks = document.getElementById("navLinks");

    if (!nav || !navBrand || !closeMenu || !navLinks) {
        return;
    }

    function openMenu() {
        nav.classList.add("nav-open");
    }

    function hideMenu() {
        nav.classList.remove("nav-open");
    }

    navBrand.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            openMenu();
        }
    });

    closeMenu.addEventListener("click", (event) => {
        event.stopPropagation();
        hideMenu();
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", hideMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            hideMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            hideMenu();
        }
    });
}

setupMobileMenu();
