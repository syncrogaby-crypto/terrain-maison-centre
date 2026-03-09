// ================================
// CHATBOT LOGIC
// ================================

const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotBox = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

// Knowledge base du chatbot
const cannedAnswers = [
    {
        q: /terrain|terrain dispo|parcelle/i,
        a: "Nous avons plusieurs terrains disponibles dans le centre (Chartres, Tours, Orléans, Blois). Consultez la section 'Terrains' pour voir nos offres actuelles ou contactez-nous pour plus de détails."
    },
    {
        q: /prix|coût|combien|tarif|combien ça coûte/i,
        a: "Les prix varient selon la localisation et la surface. Nos terrains commencent à 75 000€, et nos maisons à 165 000€. Consultez la section 'Maisons' ou demandez un devis personnalisé."
    },
    {
        q: /contact|rdv|rendez-vous|visite|appeler/i,
        a: "Vous pouvez nous contacter via le formulaire ci-dessous, par téléphone au +33 (0)2 37 24 10 50, ou par email à contact@terrains-maisons-centre.fr. Nous sommes disponibles du lundi au vendredi de 9h à 18h et le samedi de 10h à 16h."
    },
    {
        q: /partenaire|constructeur|qui|construire/i,
        a: "Nous travaillons avec différents partenaires locaux de confiance pour la construction de maisons. Nos modèles sont: Nova (4 pièces), Zen (3 pièces), Prestige (5 pièces) et Compact (2 pièces). Voulez-vous un devis ?"
    },
    {
        q: /finance|crédit|emprunt|hypothèque|financer/i,
        a: "Nous vous aidons dans vos démarches de financement et pouvons vous proposer une simulation de crédit. Parlez-en à nos conseillers lors de votre contact."
    },
    {
        q: /localisation|où|région|centre|chartres|tours|orléans|blois/i,
        a: "Nous opérons dans le Centre (région historique de la Loire). Nos principaux secteurs sont Chartres, Tours, Orléans et Blois. Pouvez-vous me préciser la localisation qui vous intéresse ?"
    },
    {
        q: /maison|modèle|construction|neuf/i,
        a: "Nous proposons 4 modèles de maison: Nova (4P, 220k€), Zen (3P, 195k€), Prestige (5P, 285k€) et Compact (2P, 165k€). Tous construits avec nos partenaires agréés et aux normes RT2012."
    },
    {
        q: /viabilisé|raccordements|tout à l'égout|électricité|eau/i,
        a: "Nos terrains sont viabilisés, c'est-à-dire qu'ils disposent des raccordements nécessaires (eau, électricité, tout-à-l'égout). C'est indiqué dans la description de chaque bien."
    },
    {
        q: /bonjour|salut|hey|allo|coucou|bonsoir|hi|hello/i,
        a: "Bonjour ! 👋 Je suis votre conseiller virtuel. Comment puis-je vous aider avec votre projet immobilier ? Posez-moi vos questions !"
    },
    {
        q: /merci|thanks|ok|d'accord|super|bien/i,
        a: "De rien ! 😊 Si vous avez d'autres questions, n'hésitez pas. Ou cliquez sur 'Contactez-nous' pour parler à un conseiller en direct."
    },
    {
        q: /.*?,/,
        a: "Je suis là pour vous renseigner sur nos terrains, maisons, partenaires et services. Posez-moi une question ou utilisez le formulaire de contact pour discuter avec un conseiller. 🏡"
    }
];

// Fonction pour ajouter un message au chat
function addMessage(text, from = "bot") {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${from}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Fonction pour obtenir la réponse du chatbot
function getBotResponse(userText) {
    for (let item of cannedAnswers) {
        if (item.q.test(userText)) {
            return item.a;
        }
    }
    return cannedAnswers[cannedAnswers.length - 1].a;
}

// Ouvrir/Fermer le chatbot
chatbotBtn.addEventListener('click', () => {
    chatbotBox.classList.toggle('active');
    if (chatbotBox.classList.contains('active') && chatMessages.children.length === 0) {
        addMessage("👋 Bonjour ! Je suis votre conseiller virtuel. Comment puis-je vous aider ?");
    }
});

// Fermer le chatbot
chatbotClose.addEventListener('click', () => {
    chatbotBox.classList.remove('active');
});

// Envoyer un message au chatbot
function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;
    
    addMessage(userText, "user");
    chatInput.value = '';
    
    // Simuler une latence de réponse
    setTimeout(() => {
        const response = getBotResponse(userText);
        addMessage(response, "bot");
    }, 600);
}

// Événement pour le bouton d'envoi
chatSend.addEventListener('click', sendMessage);

// Événement pour la touche Entrée
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});