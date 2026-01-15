const imageUpload = document.getElementById('imageUpload');
const preview = document.getElementById('preview');
const status = document.getElementById('status');
const predictionText = document.getElementById('prediction');
const suggestionText = document.getElementById('suggestion');

let model;

// 1. Charger le modèle MobileNet au démarrage
async function loadModel() {
    status.innerText = "Chargement de l'IA...";
    model = await mobilenet.load();
    status.innerText = "IA prête ! Téléchargez une photo.";
}

// 2. Gérer l'upload et l'affichage de l'image
imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            preview.src = event.target.result;
            preview.style.display = 'block';
            classifyImage();
        };
        reader.readAsDataURL(file);
    }
});

// 3. Reconnaissance et Adaptation au Café
async function classifyImage() {
    status.innerText = "Analyse en cours...";
    
    // Classification via TensorFlow.js
    const predictions = await model.classify(preview);
    
    // On récupère le meilleur résultat
    const topResult = predictions[0].className.toLowerCase();
    predictionText.innerText = `Objet détecté : ${topResult}`;

    // Logique métier : Détection Chaud/Froid et Suggestions
    interpretResult(topResult);
}

function interpretResult(label) {
    let type = "";
    let suggestion = "";

    // Logique de détection de boisson
    if (label.includes('coffee') || label.includes('espresso') || label.includes('cup') || label.includes('mug')) {
        type = "Boisson Chaude ☕";
        suggestion = "Accompagnez-le d'un cookie artisanal !";
    } else if (label.includes('glass') || label.includes('bottle') || label.includes('ice') || label.includes('cocktail')) {
        type = "Boisson Fraîche 🍹";
        suggestion = "Envie d'une paille écologique en bambou ?";
    } else {
        type = "Objet non reconnu comme boisson.";
        suggestion = "Essayez de scanner votre tasse !";
    }

    status.innerText = `Type : ${type}`;
    suggestionText.innerText = `Suggestion : ${suggestion}`;
}

loadModel();
