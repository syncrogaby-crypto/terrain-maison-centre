// ================================
// CONTACT FORM LOGIC
// ================================

const contactForm = document.getElementById('fiche-contact');
const contactResult = document.getElementById('contact-result');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!nom || !email || !message) {
        contactResult.className = 'contact-result error';
        contactResult.textContent = '❌ Erreur: Veuillez remplir tous les champs obligatoires (Nom, Email, Message).';
        return;
    }
    
    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        contactResult.className = 'contact-result error';
        contactResult.textContent = '❌ Erreur: Veuillez entrer une adresse email valide.';
        return;
    }
    
    // Validation téléphone (optionnel mais si rempli, doit être valide)
    if (tel && !/^[0-9]{10}$/.test(tel.replace(/[\s\-\.]/g, ''))) {
        contactResult.className = 'contact-result error';
        contactResult.textContent = '❌ Erreur: Le téléphone doit contenir 10 chiffres.';
        return;
    }
    
    // Créer un objet de données (à envoyer au serveur plus tard)
    const formData = {
        nom,
        email,
        tel: tel || 'Non fourni',
        sujet: sujet || 'Autre',
        message,
        date: new Date().toLocaleString('fr-FR'),
        source: 'formulaire_web'
    };
    
    // Afficher le résultat
    console.log('Données du formulaire:', formData);
    
    // Simulation d'envoi (à remplacer par appel API/serveur)
    contactResult.className = 'contact-result success';
    contactResult.textContent = '✅ Succès! Votre demande a été envoyée. Nous vous répondrons dans les 24h.';
    
    // Réinitialiser le formulaire
    contactForm.reset();
    
    // Cacher le message après 5 secondes
    setTimeout(() => {
        contactResult.className = 'contact-result';
    }, 5000);
    
    // OPTIONAL: Envoyer au serveur (décommenter et adapter)
    /*
    fetch('https://votre-serveur.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        contactResult.className = 'contact-result success';
        contactResult.textContent = '✅ Votre demande a été envoyée avec succès!';
        contactForm.reset();
    })
    .catch(error => {
        contactResult.className = 'contact-result error';
        contactResult.textContent = '❌ Erreur lors de l\'envoi. Veuillez réessayer.';
        console.error('Erreur:', error);
    });
    */
});

// Afficher/masquer le champ téléphone au besoin
document.getElementById('tel').addEventListener('input', function(e) {
    // Optional: validation en temps réel
});