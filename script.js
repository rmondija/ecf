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